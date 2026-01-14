// Excel to JSON conversion script for drone questions
const XLSX = require('xlsx');
const fs = require('fs');

// Read the existing questions from questions.json
const existingQuestions = JSON.parse(fs.readFileSync('./src/data/questions.json', 'utf8'));

// Read the Excel file
const workbook = XLSX.readFile('./考试系统1.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert Excel sheet to JSON
const excelData = XLSX.utils.sheet_to_json(worksheet);

// Function to check if a question already exists
const isQuestionExists = (newQuestion, existingQuestions) => {
  return existingQuestions.some(q => q.content === newQuestion.content);
};

// Process each question from Excel
const newQuestions = [];
excelData.forEach((row, index) => {
  // Skip empty rows
  if (!row['关键词']) {
    return;
  }

  // Extract question type and content from '关键词' column
  // Format: "单选题\n1: 关于无人机电池使用，以下( )描述是正确的。"
  const keywordText = row['关键词'];
  const typeMatch = keywordText.match(/^(单选题|多选题|判断题)/);
  const contentMatch = keywordText.match(/\d+:\s*(.*)$/s);
  
  if (!typeMatch || !contentMatch) {
    return;
  }

  const question = {
    id: existingQuestions.length + newQuestions.length + 1,
    type: typeMatch[1] || '单选题',
    content: contentMatch[1] || '',
    options: [],
    answer: '',
    analysis: ''
  };

  // Extract options from xuan, xuan1, xuan2, xuan3 columns
  const optionKeys = ['A', 'B', 'C', 'D'];
  const optionColumns = ['xuan', 'xuan1', 'xuan2', 'xuan3'];
  
  optionColumns.forEach((col, idx) => {
    const optionContent = row[col];
    if (optionContent) {
      // Remove the option letter prefix if present (e.g., "A 无人机电池可以在任何温度下使用。" -> "无人机电池可以在任何温度下使用。")
      const cleanedContent = optionContent.replace(/^[A-D]\s*?/u, '');
      question.options.push({
        key: optionKeys[idx],
        content: cleanedContent
      });
    }
  });

  // Extract answer from successbox column
  // Format: "正确答案：D"
  const successboxText = row['successbox'];
  if (successboxText) {
    const answerMatch = successboxText.match(/正确答案：([A-D])/);
    if (answerMatch) {
      question.answer = answerMatch[1];
    }
  }

  // Only add if content is not empty and question doesn't already exist
  if (question.content && !isQuestionExists(question, existingQuestions)) {
    newQuestions.push(question);
  }
});

// Combine existing and new questions
const combinedQuestions = [...existingQuestions, ...newQuestions];

// Write back to questions.json
fs.writeFileSync('./src/data/questions.json', JSON.stringify(combinedQuestions, null, 2), 'utf8');

console.log(`Conversion completed!`);
console.log(`Existing questions: ${existingQuestions.length}`);
console.log(`New questions added: ${newQuestions.length}`);
console.log(`Total questions: ${combinedQuestions.length}`);
