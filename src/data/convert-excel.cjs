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
  // Skip header row if needed
  if (index === 0 && row['题目内容']) {
    return;
  }

  // Extract question data
  const question = {
    id: existingQuestions.length + newQuestions.length + 1,
    type: row['类型'] || '单选题',
    content: row['题目内容'] || '',
    options: [],
    answer: '',
    analysis: row['解析'] || ''
  };

  // Add options based on type
  if (question.type === '单选题' || question.type === '多选题') {
    // Extract options from columns like 'A选项', 'B选项', etc.
    const optionKeys = ['A', 'B', 'C', 'D', 'E', 'F'];
    optionKeys.forEach(key => {
      const optionContent = row[`${key}选项`];
      if (optionContent) {
        question.options.push({
          key: key,
          content: optionContent
        });
      }
    });
  } else if (question.type === '判断题') {
    // For判断题, always add True/False options
    question.options = [
      { key: 'A', content: '正确' },
      { key: 'B', content: '错误' }
    ];
  }

  // Set answer based on type
  const answerText = row['答案'] || '';
  if (question.type === '判断题') {
    // Convert 正确/错误 to A/B
    if (answerText === '正确' || answerText === '是' || answerText === '对') {
      question.answer = 'A';
    } else if (answerText === '错误' || answerText === '否' || answerText === '错') {
      question.answer = 'B';
    }
  } else {
    // For other types, use the answer text directly
    question.answer = answerText;
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
