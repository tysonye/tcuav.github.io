// 将questions.json中的题目分配到三个分级文件中
const fs = require('fs');

// 读取完整题库
const allQuestions = JSON.parse(fs.readFileSync('./src/data/questions.json', 'utf8'));
const totalQuestions = allQuestions.length;
console.log(`总题目数: ${totalQuestions}`);

// 分配策略：三级334题，四级333题，五级333题
const level3Count = 334;
const level4Count = 333;
const level5Count = 333;

// 分配题目
const level3Questions = allQuestions.slice(0, level3Count);
const level4Questions = allQuestions.slice(level3Count, level3Count + level4Count);
const level5Questions = allQuestions.slice(level3Count + level4Count);

console.log(`三级题目数: ${level3Questions.length}`);
console.log(`四级题目数: ${level4Questions.length}`);
console.log(`五级题目数: ${level5Questions.length}`);

// 写入分级文件
fs.writeFileSync('./src/data/questions-level3.json', JSON.stringify(level3Questions, null, 2), 'utf8');
fs.writeFileSync('./src/data/questions-level4.json', JSON.stringify(level4Questions, null, 2), 'utf8');
fs.writeFileSync('./src/data/questions-level5.json', JSON.stringify(level5Questions, null, 2), 'utf8');

console.log('题目分配完成！');
