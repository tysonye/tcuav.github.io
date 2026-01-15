import { useState, useEffect } from 'react';

interface Option {
  key: string;
  content: string;
}

interface Question {
  id: number;
  type: string;
  content: string;
  options: Option[];
  answer: string;
  analysis: string;
}

const Quiz = () => {
  // 定义级别选项
  const levels = ['人社三级', '人社四级', '人社五级', 'CAAC机长'];
  
  // 状态管理
  const [currentLevel, setCurrentLevel] = useState('人社五级'); // 默认选择五级
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<number[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  // 跟踪用户已提交答案的题目数量
  const [submittedQuestions, setSubmittedQuestions] = useState(0);

  // 加载题目数据
  useEffect(() => {
    const loadQuestions = async () => {
      console.log('开始加载题目数据');
      console.log('当前级别:', currentLevel);
      setIsLoading(true);
      
      try {
        // 根据当前级别动态导入题库
        let selectedQuestions;
        switch (currentLevel) {
          case '人社四级':
            // 四级：使用questions-level4.json
            selectedQuestions = await import('../data/questions-level4.json');
            console.log('人社四级题库长度:', selectedQuestions.default.length);
            selectedQuestions = selectedQuestions.default;
            break;
          case '人社五级':
            // 五级：使用questions-level5.json
            selectedQuestions = await import('../data/questions-level5.json');
            console.log('人社五级题库长度:', selectedQuestions.default.length);
            selectedQuestions = selectedQuestions.default;
            break;
          case 'CAAC机长':
            // CAAC机长：使用questions-caac.json
            selectedQuestions = await import('../data/questions-caac.json');
            console.log('CAAC机长题库长度:', selectedQuestions.default.length);
            selectedQuestions = selectedQuestions.default;
            break;
          case '人社三级':
          default:
            // 三级：使用questions-level3.json
            selectedQuestions = await import('../data/questions-level3.json');
            console.log('三级题库长度:', selectedQuestions.default.length);
            selectedQuestions = selectedQuestions.default;
            break;
        }
        
        console.log('选中的题库长度:', selectedQuestions.length);
        
        // 根据级别决定是否随机排序题目
        let processedQuestions;
        if (currentLevel === '人社三级') {
          // 三级题目：按照固定顺序展示
          processedQuestions = [...(selectedQuestions as Question[])];
          console.log('人社三级题目按照固定顺序加载，数量:', processedQuestions.length);
        } else {
          // 其他级别：随机排序题目
          processedQuestions = [...(selectedQuestions as Question[])].sort(() => Math.random() - 0.5);
          console.log('打乱后的题目数量:', processedQuestions.length);
        }
        setQuestions(processedQuestions);
        // 重置状态
        setCurrentQuestionIndex(0);
        setScore(0);
        setQuizCompleted(false);
        setSubmittedQuestions(0);
      } catch (error) {
        console.error('加载题目数据失败:', error);
        setQuestions([]);
      } finally {
        setIsLoading(false);
        console.log('题目数据加载完成');
      }
    };

    loadQuestions();
  }, [currentLevel]);

  // 重置当前题目的选择
  useEffect(() => {
    setSelectedAnswer([]);
    setShowAnswer(false);
  }, [currentQuestionIndex]);

  // 处理选项选择
  const handleOptionSelect = (optionKey: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    
    if (currentQuestion.type === '多选题') {
      // 多选题：切换选项状态
      setSelectedAnswer(prev => {
        if (prev.includes(optionKey)) {
          // 如果已选中，移除
          return prev.filter(key => key !== optionKey);
        } else {
          // 如果未选中，添加
          return [...prev, optionKey].sort(); // 排序保持一致性
        }
      });
    } else {
      // 单选题：替换选择
      setSelectedAnswer([optionKey]);
    }
  };

  // 检查答案
  const checkAnswer = () => {
    if (!selectedAnswer || selectedAnswer.length === 0) return;

    // 只在第一次提交当前题目答案时更新分数和已提交题目数量
    if (!showAnswer) {
      setSubmittedQuestions(prev => prev + 1);
      
      const currentQuestion = questions[currentQuestionIndex];
      // 将选中答案数组转换为字符串（如 ['A', 'B'] → 'AB'）
      const selectedAnswerStr = selectedAnswer.sort().join('');
      const isCorrect = selectedAnswerStr === currentQuestion.answer;
      
      if (isCorrect) {
        setScore(prevScore => prevScore + 1);
        
        // 显示答案后自动跳转到下一题
        setShowAnswer(true);
        setTimeout(() => {
          nextQuestion();
        }, 1000); // 延迟1秒跳转，让用户看到正确答案
        return;
      }
    }
    
    // 错误答案或已显示答案时，只显示答案不自动跳转
    setShowAnswer(true);
  };

  // 下一题
  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  // 上一题
  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };

  // 重新开始
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer([]);
    setShowAnswer(false);
    setScore(0);
    setQuizCompleted(false);
    setSubmittedQuestions(0);
  };

  // 搜索题目
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.trim() === '') {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const results = questions
      .map((q, index) => ({
        index,
        content: q.content,
        id: q.id
      }))
      .filter(item => 
        item.content.toLowerCase().includes(term.toLowerCase())
      )
      .map(item => item.index);

    setSearchResults(results);
    setShowSearchResults(true);
  };

  // 跳转到搜索结果
  const jumpToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    setSearchTerm('');
    setSearchResults([]);
    setShowSearchResults(false);
  };

  // 计算正确率 - 基于用户已提交答案的题目数量
  const calculateAccuracy = () => {
    // 避免除以0
    if (submittedQuestions === 0) return 0;
    return Math.round((score / submittedQuestions) * 100);
  };

  if (isLoading) {
    return (
      <section id="quiz" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-xl text-gray-600 dark:text-gray-300">正在加载题目...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (quizCompleted) {
    return (
      <section id="quiz" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
              考试完成
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-blue-600 dark:bg-blue-400 w-24 rounded-full"></div>
            </h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
            <div className="mb-8">
              <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {score}/{questions.length}
              </div>
              <div className="text-2xl mb-4">
                {calculateAccuracy()}%
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                恭喜你完成了所有题目！
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">答题详情</h3>
              <div className="flex justify-center space-x-8">
                <div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">{score}</div>
                  <div className="text-gray-600 dark:text-gray-300">答对</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400">{questions.length - score}</div>
                  <div className="text-gray-600 dark:text-gray-300">答错</div>
                </div>
              </div>
            </div>
            
            <button
              onClick={restartQuiz}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
            >
              重新开始
            </button>
          </div>
        </div>
      </section>
    );
  }

  // 检查是否有可用题目
  if (questions.length === 0 && !isLoading) {
    return (
      <section id="quiz" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
              在线刷题
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-blue-600 dark:bg-blue-400 w-24 rounded-full"></div>
            </h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
            <div className="mb-8">
              <div className="text-6xl font-bold text-red-600 dark:text-red-400 mb-2">
                ❌
              </div>
              <div className="text-2xl mb-4">
                暂无题目数据
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                请检查题库文件是否正确加载，或者尝试切换到其他级别
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              {levels.map((level) => (
                <button
                  key={level}
                  className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 ${currentLevel === level
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'}`}
                  onClick={() => setCurrentLevel(level)}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <section id="quiz" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            在线刷题
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-blue-600 dark:bg-blue-400 w-24 rounded-full"></div>
          </h2>
          
          {/* 级别选择标签 */}
          <div className="flex justify-center space-x-4 mb-6">
            {levels.map((level) => (
              <button
                key={level}
                className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 ${currentLevel === level
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'}`}
                onClick={() => setCurrentLevel(level)}
              >
                {level}
              </button>
            ))}
          </div>
          

        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* 题目导航栏 */}
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
            <div className="space-y-4">
              {/* 搜索框 */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索题目..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
                {/* 搜索结果 */}
                {showSearchResults && searchResults.length > 0 && (
                  <div className="absolute left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                    {searchResults.map((index) => {
                      const question = questions[index];
                      return (
                        <div
                          key={index}
                          onClick={() => jumpToQuestion(index)}
                          className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer border-b border-gray-200 dark:border-gray-700 last:border-b-0 transition-colors"
                        >
                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            第 {index + 1} 题：{question.content}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {question.type}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                {showSearchResults && searchResults.length === 0 && (
                  <div className="absolute left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-10">
                    <div className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                      未找到匹配的题目
                    </div>
                  </div>
                )}
              </div>
              
              {/* 题目信息 */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-3">
                  {/* 上一题按钮 */}
                  <button
                    onClick={prevQuestion}
                    disabled={currentQuestionIndex === 0}
                    className={`p-2 rounded-full transition-all duration-300 ${currentQuestionIndex === 0 
                      ? 'opacity-50 cursor-not-allowed text-gray-400'
                      : 'hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300'}`}
                    aria-label="上一题"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <div className="text-lg font-semibold">
                    第 {currentQuestionIndex + 1}/{questions.length} 题
                  </div>
                  
                  {/* 下一题按钮 */}
                  <button
                    onClick={nextQuestion}
                    disabled={currentQuestionIndex === questions.length - 1}
                    className={`p-2 rounded-full transition-all duration-300 ${currentQuestionIndex === questions.length - 1 
                      ? 'opacity-50 cursor-not-allowed text-gray-400'
                      : 'hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300'}`}
                    aria-label="下一题"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-wrap items-center space-x-4 sm:space-x-4 gap-y-1">
                  <div className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                    正确率：{calculateAccuracy()}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                    类型：{currentQuestion.type}
                  </div>
                </div>
              </div>
              
              {/* 进度条 */}
              <div>
                <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* 题目内容 */}
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">
                {currentQuestion.content}
              </h3>
            </div>

            {/* 选项 */}
            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((option, index) => {
                // 检查选项是否被选中
                const isSelected = selectedAnswer.includes(option.key);
                // 检查选项是否是正确答案的一部分
                const isCorrectAnswer = currentQuestion.answer.includes(option.key);
                
                return (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${isSelected 
                      ? (showAnswer 
                        ? (isCorrectAnswer 
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                          : 'border-red-500 bg-red-50 dark:bg-red-900/20') 
                        : 'border-blue-500 bg-blue-50 dark:bg-blue-900/20') 
                      : showAnswer && isCorrectAnswer 
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                        : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30'}`}
                    onClick={() => handleOptionSelect(option.key)}
                  >
                    <div className="flex items-start">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${isSelected 
                        ? (showAnswer 
                          ? (isCorrectAnswer 
                            ? 'bg-green-500 text-white' 
                            : 'bg-red-500 text-white') 
                          : 'bg-blue-500 text-white') 
                        : showAnswer && isCorrectAnswer 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>
                        {option.key}
                      </div>
                      <div className={isSelected ? 'font-medium' : ''}>
                        {option.content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 查看解析 */}
            {showAnswer && currentQuestion.analysis && (
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg mb-6">
                <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">解析：</h4>
                <p className="text-gray-700 dark:text-gray-300">{currentQuestion.analysis}</p>
              </div>
            )}

            {/* 正确答案提示 */}
            {showAnswer && (
              <div className="mb-6">
                <p className="text-sm font-medium">
                  正确答案：
                  <span className="ml-2 text-green-600 dark:text-green-400 font-bold">
                    {currentQuestion.answer}
                  </span>
                </p>
              </div>
            )}

            {/* 操作按钮 */}
            <div className="flex justify-between items-center">
              <button
                onClick={prevQuestion}
                disabled={currentQuestionIndex === 0}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${currentQuestionIndex === 0 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
              >
                上一题
              </button>

              <div className="space-x-3">
                {!showAnswer ? (
                  <button
                    onClick={checkAnswer}
                    disabled={!selectedAnswer}
                    className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${!selectedAnswer 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                  >
                    检查答案
                  </button>
                ) : (
                  <button
                    onClick={nextQuestion}
                    className="px-6 py-2 rounded-lg font-medium bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
                  >
                    {currentQuestionIndex < questions.length - 1 ? '下一题' : '查看结果'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
