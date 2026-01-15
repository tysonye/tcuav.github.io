const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

// CAAC题库文件夹路径
const CAAC_FOLDER_PATH = path.join(__dirname, 'CAAC题库');
// 输出文件路径
const OUTPUT_PATH = path.join(__dirname, 'src/data/questions-caac.json');

// 读取单个Word文档内容
async function readWordFile(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    const result = await mammoth.extractRawText({ buffer });
    return result.value;
  } catch (error) {
    console.error(`读取Word文件失败：${filePath}`, error);
    return '';
  }
}

// 从文本中提取题目
function extractQuestions(text) {
  const questions = [];
  
  // 调整正则表达式，匹配实际的题目格式
  const questionRegex = /(\d+)、\s*(.*?)\s*A\s*\.\s*(.*?)\s*B\s*\.\s*(.*?)\s*C\s*\.\s*(.*?)\s*D\s*\.\s*(.*?)\s*答案\s*：\s*([ABCD])/gs;
  
  let match;
  while ((match = questionRegex.exec(text)) !== null) {
    const [, id, content, optionA, optionB, optionC, optionD, answer] = match;
    
    questions.push({
      id: parseInt(id),
      type: '单选题',
      content: content.trim(),
      options: [
        { key: 'A', content: optionA.trim() },
        { key: 'B', content: optionB.trim() },
        { key: 'C', content: optionC.trim() },
        { key: 'D', content: optionD.trim() }
      ],
      answer: answer.trim(),
      analysis: ''
    });
  }
  
  return questions;
}

// 主转换函数
async function convertCaacWordFiles() {
  console.log('开始转换CAAC题库Word文件...');
  
  // 获取所有Word文件
  const wordFiles = fs.readdirSync(CAAC_FOLDER_PATH)
    .filter(file => file.endsWith('.docx'))
    .sort();
  
  console.log(`找到${wordFiles.length}个Word文件：`);
  wordFiles.forEach(file => console.log(`  - ${file}`));
  
  let allQuestions = [];
  
  // 处理每个Word文件
  for (const file of wordFiles) {
    const filePath = path.join(CAAC_FOLDER_PATH, file);
    console.log(`\n处理文件：${file}`);
    
    try {
      const text = await readWordFile(filePath);
      console.log(`  提取文本成功，长度：${text.length}字符`);
      
      const questions = extractQuestions(text);
      console.log(`  提取到${questions.length}道题目`);
      
      allQuestions = allQuestions.concat(questions);
    } catch (error) {
      console.error(`  处理文件失败：${error.message}`);
    }
  }
  
  // 重新编号题目ID
  allQuestions = allQuestions.map((q, index) => ({
    ...q,
    id: index + 1
  }));
  
  console.log(`\n所有文件处理完成！总题目数：${allQuestions.length}`);
  
  // 写入JSON文件
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(allQuestions, null, 2), 'utf8');
  console.log(`\n题库已保存到：${OUTPUT_PATH}`);
}

// 执行转换
convertCaacWordFiles();
