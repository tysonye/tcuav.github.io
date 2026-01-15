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
  
  // 简单的方式：先找到所有题目编号位置
  const questionNumberRegex = /(\d+)、/g;
  let matches = [];
  let match;
  
  // 收集所有题目编号的位置
  while ((match = questionNumberRegex.exec(text)) !== null) {
    matches.push({ index: match.index, id: match[1] });
  }
  
  // 处理每个题目
  for (let i = 0; i < matches.length; i++) {
    const startIndex = matches[i].index;
    const endIndex = i < matches.length - 1 ? matches[i + 1].index : text.length;
    const questionText = text.substring(startIndex, endIndex);
    const id = parseInt(matches[i].id);
    
    // 提取题目内容（从编号到第一个选项A之前）
    const contentMatch = questionText.match(/(\d+)、(.+?)(?=A[.、])/s);
    if (!contentMatch) continue;
    
    const [, , content] = contentMatch;
    
    // 提取选项A
    const optionAMatch = questionText.match(/A[.、]\s*([^BCD]+?)(?=B[.、])/s);
    if (!optionAMatch) continue;
    
    // 提取选项B
    const optionBMatch = questionText.match(/B[.、]\s*([^CD]+?)(?=C[.、])/s);
    if (!optionBMatch) continue;
    
    // 提取选项C
    const optionCMatch = questionText.match(/C[.、]\s*([^D]+?)(?=D[.、]|答案)/s);
    if (!optionCMatch) continue;
    
    // 提取选项D（如果有）
    const optionDMatch = questionText.match(/D[.、]\s*([^答案]+?)(?=答案)/s);
    
    // 提取答案
    const answerMatch = questionText.match(/答案[：:]\s*([ABCD])/);
    if (!answerMatch) continue;
    
    // 构建选项数组
    const options = [
      { key: 'A', content: optionAMatch[1].replace(/\s+/g, ' ').trim() },
      { key: 'B', content: optionBMatch[1].replace(/\s+/g, ' ').trim() },
      { key: 'C', content: optionCMatch[1].replace(/\s+/g, ' ').trim() }
    ];
    
    // 如果有选项D，添加到数组中
    if (optionDMatch) {
      options.push({ key: 'D', content: optionDMatch[1].replace(/\s+/g, ' ').trim() });
    }
    
    // 保存题目
    questions.push({
      id: id,
      type: '单选题',
      content: content.replace(/\s+/g, ' ').trim(),
      options: options,
      answer: answerMatch[1].trim(),
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
