const fs = require('fs');
const XLSX = require('xlsx');

// 定义题库级别映射
const levels = {
  '三级': 'level3',
  '四级': 'level4',
  '五级': 'level5'
};

// 转换函数
function convertExcelToJson(level, filePath) {
  console.log(`开始转换${level}题库...`);
  
  // 读取Excel文件
  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  
  // 转换为JSON，包含所有行
  const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  
  console.log(`${level}Excel文件总行数：${jsonData.length}行`);
  
  // 转换为带标题的JSON格式
  const jsonWithHeaders = XLSX.utils.sheet_to_json(worksheet);
  console.log(`${level}实际数据行数：${jsonWithHeaders.length}行`);
  
  // 处理题目数据
  const questions = [];
  
  // 遍历所有数据行，从索引0开始（XLSX.utils.sheet_to_json已跳过标题行）
  for (let i = 0; i < Math.min(500, jsonWithHeaders.length); i++) {
    const row = jsonWithHeaders[i];
    
    const id = i + 1; // 题目ID从1开始
    let content = row['关键词'] || '';
    
    // 提取题型和题目内容
    let type = '单选题';
    if (content.includes('判断题')) {
      type = '判断题';
      content = content.replace(/判断题\s*\d+:\s*/, '');
    } else if (content.includes('多选题')) {
      type = '多选题';
      content = content.replace(/多选题\s*\d+:\s*/, '');
    } else if (content.includes('单选题')) {
      type = '单选题';
      content = content.replace(/单选题\s*\d+:\s*/, '');
    }
    
    // 解析选项
    const options = [];
    if (row['xuan']) {
      let optionContent = row['xuan'].replace(/^[A-Z]\s*/, ''); // 移除选项前的字母前缀
      optionContent = optionContent.replace(/^[A-Z] /, ''); // 移除选项前的字母加全角空格前缀
      options.push({ key: 'A', content: optionContent });
    }
    if (row['xuan1']) {
      let optionContent = row['xuan1'].replace(/^[A-Z]\s*/, '');
      optionContent = optionContent.replace(/^[A-Z] /, '');
      options.push({ key: 'B', content: optionContent });
    }
    if (row['xuan2']) {
      let optionContent = row['xuan2'].replace(/^[A-Z]\s*/, '');
      optionContent = optionContent.replace(/^[A-Z] /, '');
      options.push({ key: 'C', content: optionContent });
    }
    if (row['xuan3']) {
      let optionContent = row['xuan3'].replace(/^[A-Z]\s*/, '');
      optionContent = optionContent.replace(/^[A-Z] /, '');
      options.push({ key: 'D', content: optionContent });
    }
    
    // 解析答案
    let answer = '';
    const answerText = row['successbox'] || '';
    if (typeof answerText === 'string') {
      // 处理判断题特殊情况
      if (type === '判断题') {
        if (answerText === '正确答案：正确' || answerText === '正确答案：是') {
          answer = 'A';
        } else if (answerText === '正确答案：错误' || answerText === '正确答案：否') {
          answer = 'B';
        }
      } else {
        // 提取单选题和多选题的字母答案
        const answerMatch = answerText.match(/正确答案：\s*([A-D\s]+)/);
        if (answerMatch && answerMatch[1]) {
          answer = answerMatch[1].replace(/\s+/g, '').toUpperCase();
        }
      }
    } else if (typeof answerText === 'number') {
      // 处理数字答案
      answer = String.fromCharCode(64 + answerText); // 1 -> A, 2 -> B, etc.
    }
    
    // 解析解析
    const analysis = ''; // 暂时不使用btn字段，因为它显示的是"上一题"
    
    // 创建题目对象
    const question = {
      id,
      type,
      content,
      options,
      answer,
      analysis
    };
    
    // 只添加有内容的题目
    if (content && options.length > 0 && answer) {
      questions.push(question);
    }
  }
  
  // 写入JSON文件，使用英文级别名称
  const outputPath = `src/data/questions-${levels[level]}.json`;
  fs.writeFileSync(outputPath, JSON.stringify(questions, null, 2), 'utf8');
  
  console.log(`${level}题库转换完成，共${questions.length}道题目，输出到${outputPath}`);
  
  return questions.length;
}

// 主函数
function main() {
  console.log('开始转换题库...');
  
  // 确保输出目录存在
  if (!fs.existsSync('src/data')) {
    fs.mkdirSync('src/data', { recursive: true });
  }
  
  // 转换各个级别的题库
  let totalQuestions = 0;
  
  // 转换三级题库
  const level3Count = convertExcelToJson('三级', '考试系统三级.xlsx');
  totalQuestions += level3Count;
  
  // 转换四级题库
  const level4Count = convertExcelToJson('四级', '考试系统四级.xlsx');
  totalQuestions += level4Count;
  
  // 转换五级题库
  const level5Count = convertExcelToJson('五级', '考试系统五级.xlsx');
  totalQuestions += level5Count;
  
  console.log(`\n所有题库转换完成！总题目数：${totalQuestions}`);
  console.log(`三级：${level3Count}道`);
  console.log(`四级：${level4Count}道`);
  console.log(`五级：${level5Count}道`);
}

// 执行主函数
main();