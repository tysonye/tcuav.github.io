const fs = require('fs');
const path = require('path');

function convertXlsxToJson() {
  try {
    const XLSX = require('xlsx');

    const xlsxPath = path.join(__dirname, '..', '安庆市无人机驾驶员职业技能竞赛（题库500题）.xlsx');
    const outputPath = path.join(__dirname, '..', 'src', 'data', 'questions-competition.json');

    console.log('正在读取Excel文件...');
    const workbook = XLSX.readFile(xlsxPath);

    const sheetName = workbook.SheetNames[0];
    console.log('工作表名称:', sheetName);

    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    console.log('总行数:', jsonData.length);
    console.log('第一行内容（表头）:', jsonData[0]);

    const questions = [];
    let questionId = 0;

    const headerRow = jsonData[0];
    let colMap = {};

    headerRow.forEach((col, index) => {
      if (col) {
        colMap[col.toString().toLowerCase()] = index;
      }
    });

    console.log('\n列映射:', colMap);

    const typeIndex = colMap['type'] ?? colMap['题型'] ?? colMap['题目类型'] ?? 0;
    const contentIndex = colMap['content'] ?? colMap['题目'] ?? colMap['题目内容'] ?? 1;
    const optionAIndex = colMap['optiona'] ?? colMap['a'] ?? colMap['选项a'] ?? colMap['选项A'] ?? 2;
    const optionBIndex = colMap['optionb'] ?? colMap['b'] ?? colMap['选项b'] ?? colMap['选项B'] ?? 3;
    const optionCIndex = colMap['optionc'] ?? colMap['c'] ?? colMap['选项c'] ?? colMap['选项C'] ?? 4;
    const optionDIndex = colMap['optiond'] ?? colMap['d'] ?? colMap['选项d'] ?? colMap['选项D'] ?? 5;
    const answerIndex = colMap['answer'] ?? colMap['答案'] ?? colMap['正确答案'] ?? 6;
    const analysisIndex = colMap['analysis'] ?? colMap['解析'] ?? colMap['答案解析'] ?? 7;

    for (let i = 1; i < jsonData.length; i++) {
      const row = jsonData[i];

      if (!row || row.length === 0) continue;

      const type = row[typeIndex] || '单选题';
      const content = row[contentIndex];

      if (!content) continue;

      const options = [];
      if (row[optionAIndex]) options.push({ key: 'A', content: row[optionAIndex].toString() });
      if (row[optionBIndex]) options.push({ key: 'B', content: row[optionBIndex].toString() });
      if (row[optionCIndex]) options.push({ key: 'C', content: row[optionCIndex].toString() });
      if (row[optionDIndex]) options.push({ key: 'D', content: row[optionDIndex].toString() });

      if (options.length === 0) continue;

      let answer = row[answerIndex] ? row[answerIndex].toString().toUpperCase() : '';

      if (!answer && type.includes('多选')) {
        answer = 'ABCD';
      }

      const analysis = row[analysisIndex] ? row[analysisIndex].toString() : '';

      questionId++;

      questions.push({
        id: questionId,
        type: type.includes('多选') ? '多选题' : (type.includes('判断') ? '判断题' : '单选题'),
        content: content.toString(),
        options: options,
        answer: answer.replace(/[（）()【】[\]]/g, ''),
        analysis: analysis
      });
    }

    console.log(`\n共提取 ${questions.length} 道题目`);

    fs.writeFileSync(outputPath, JSON.stringify(questions, null, 2), 'utf-8');
    console.log(`已保存到: ${outputPath}`);

    const typeCount = {};
    questions.forEach(q => {
      typeCount[q.type] = (typeCount[q.type] || 0) + 1;
    });
    console.log('\n题目类型统计:');
    Object.entries(typeCount).forEach(([type, count]) => {
      console.log(`  ${type}: ${count} 道`);
    });

    if (questions.length > 0) {
      console.log('\n前3道题目预览:');
      questions.slice(0, 3).forEach((q, idx) => {
        console.log(`\n${idx + 1}. [${q.type}] ${q.content}`);
        q.options.forEach(opt => {
          console.log(`   ${opt.key}. ${opt.content}`);
        });
        console.log(`   答案: ${q.answer}`);
        if (q.analysis) {
          console.log(`   解析: ${q.analysis}`);
        }
      });
    }

  } catch (error) {
    console.error('转换失败:', error);
    process.exit(1);
  }
}

convertXlsxToJson();