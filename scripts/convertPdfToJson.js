const fs = require('fs');
const path = require('path');

async function convertPdfToJson() {
  try {
    const pdfParse = require('pdf-parse');

    const pdfPath = path.join(__dirname, '..', '安庆市无人机驾驶员职业技能竞赛（题库500题）.pdf');
    const outputPath = path.join(__dirname, '..', 'src', 'data', 'questions-competition.json');

    console.log('正在读取PDF文件...');
    const dataBuffer = fs.readFileSync(pdfPath);

    console.log('正在解析PDF内容...');
    const data = await pdfParse(dataBuffer);

    const text = data.text;
    console.log('PDF页数:', data.numpages);
    console.log('提取文本长度:', text.length);

    const questions = [];
    const lines = text.split('\n');

    let currentQuestion = null;
    let options = [];
    let answer = '';
    let analysis = '';
    let questionId = 0;
    let currentType = '单选题';

    const cleanedLines = lines.map(line => line.trim()).filter(line => line.length > 0);

    for (let i = 0; i < cleanedLines.length; i++) {
      const line = cleanedLines[i];

      if (line.match(/^\d+[.、]/) || line.match(/^第\s*\d+\s*题/)) {
        if (currentQuestion) {
          if (options.length > 0 && answer) {
            questions.push({
              id: questionId,
              type: currentType,
              content: currentQuestion,
              options: options.map((opt, idx) => ({
                key: ['A', 'B', 'C', 'D', 'E', 'F'][idx],
                content: opt
              })),
              answer: answer.replace(/[（）()]/g, ''),
              analysis: analysis || ''
            });
          }
        }

        questionId++;
        const match = line.match(/^\d+[.、]\s*(.+)/) || line.match(/^第\s*\d+\s*题\s*[:：]?\s*(.+)/);
        currentQuestion = match ? match[1] : line;
        options = [];
        answer = '';
        analysis = '';
        currentType = '单选题';

        if (line.includes('多选') || line.includes('多项选择')) {
          currentType = '多选题';
        } else if (line.includes('判断')) {
          currentType = '判断题';
        }
      }
      else if (line.match(/^[A-F][.、)）]/) || line.match(/^【A-F】/)) {
        const optionMatch = line.match(/^[A-F][.、)）]\s*(.+)/) || line.match(/^【([A-F])】\s*(.+)/);
        if (optionMatch) {
          options.push(optionMatch[2] || optionMatch[1]);
        } else {
          const cleanOption = line.replace(/^[A-F][.、)）]\s*/, '').replace(/^【[A-F]】\s*/, '');
          if (cleanOption) {
            options.push(cleanOption);
          }
        }
      }
      else if (line.includes('答案') || line.includes('正确答案')) {
        const answerMatch = line.match(/答案[：:]\s*([A-F]+)/i) ||
                          line.match(/正确答案[：:]\s*([A-F]+)/i) ||
                          line.match(/答[：:]\s*([A-F]+)/i);
        if (answerMatch) {
          answer = answerMatch[1].toUpperCase();
        }
      }
      else if (line.includes('解析') || line.includes('答案解析')) {
        const analysisMatch = line.match(/解析[：:]\s*(.+)/) ||
                             line.match(/答案解析[：:]\s*(.+)/);
        if (analysisMatch) {
          analysis = analysisMatch[1];
        }
      }
      else if (line.includes('题目') || line.includes('说明')) {
        continue;
      }
      else if (currentQuestion && options.length > 0 && !answer && line.length < 200) {
        if (line.match(/^[A-F]/) && !line.includes('.')) {
          options.push(line);
        }
      }
    }

    if (currentQuestion && options.length > 0 && answer) {
      questions.push({
        id: questionId,
        type: currentType,
        content: currentQuestion,
        options: options.map((opt, idx) => ({
          key: ['A', 'B', 'C', 'D', 'E', 'F'][idx],
          content: opt
        })),
        answer: answer.replace(/[（）()]/g, ''),
        analysis: analysis || ''
      });
    }

    console.log(`\n共提取 ${questions.length} 道题目`);

    fs.writeFileSync(outputPath, JSON.stringify(questions, null, 2), 'utf-8');
    console.log(`\n已保存到: ${outputPath}`);

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

convertPdfToJson();