import { useState, useEffect } from 'react'
import { fetchSkillsFromIssues } from '../utils/githubApi'

interface Skill {
  name: string
  level: number
  description: string
  details: {
    title: string
    content: string[]
    applications: string[]
    advantages: string[]
    courses?: string[]
  }
}

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
  const [skillsData, setSkillsData] = useState<Skill[]>([])
  const [isLoading, setIsLoading] = useState(true)
  
  // 从GitHub Issues获取技能数据
  useEffect(() => {
    const loadSkills = async () => {
      setIsLoading(true)
      const skills = await fetchSkillsFromIssues()
      setSkillsData(skills)
      setIsLoading(false)
    }
    
    loadSkills()
  }, [])
  
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            核心技术
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-blue-600 dark:bg-blue-400 w-24 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            我们掌握多项无人机核心技术，为各行业提供专业解决方案
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-80 md:h-96">
            <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl flex items-center justify-center shadow-lg">
              <svg width="80%" height="80%" viewBox="0 0 400 400" className="max-w-full h-auto">
                <circle cx="200" cy="200" r="150" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                <circle cx="200" cy="200" r="100" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                <circle cx="200" cy="200" r="50" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                
                {/* 无人机设计 */}
                <line x1="200" y1="50" x2="200" y2="30" stroke="#3b82f6" strokeWidth="3" />
                <text x="200" y="20" textAnchor="middle" fill="#3b82f6" fontSize="14" fontWeight="bold">无人机设计</text>
                
                {/* 飞控系统 */}
                <line x1="336.6" y1="100" x2="356.6" y2="90" stroke="#10b981" strokeWidth="3" />
                <text x="370" y="85" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold">飞控系统</text>
                
                {/* 自动驾驶 */}
                <line x1="336.6" y1="300" x2="356.6" y2="310" stroke="#f59e0b" strokeWidth="3" />
                <text x="370" y="315" textAnchor="middle" fill="#f59e0b" fontSize="14" fontWeight="bold">自动驾驶</text>
                
                {/* 传感器技术 */}
                <line x1="200" y1="350" x2="200" y2="370" stroke="#8b5cf6" strokeWidth="3" />
                <text x="200" y="380" textAnchor="middle" fill="#8b5cf6" fontSize="14" fontWeight="bold">传感器技术</text>
                
                {/* 图像处理 */}
                <line x1="63.4" y1="300" x2="43.4" y2="310" stroke="#ec4899" strokeWidth="3" />
                <text x="30" y="315" textAnchor="middle" fill="#ec4899" fontSize="14" fontWeight="bold">图像处理</text>
                
                {/* 数据传输 */}
                <line x1="63.4" y1="100" x2="43.4" y2="90" stroke="#34d399" strokeWidth="3" />
                <text x="30" y="85" textAnchor="middle" fill="#34d399" fontSize="14" fontWeight="bold">数据传输</text>
                
                {/* 雷达图填充 */}
                <polygon 
                  points="200,50 336.6,100 336.6,300 200,350 63.4,300 63.4,100" 
                  fill="url(#radarGradient)" 
                  fillOpacity="0.4" 
                  stroke="#3b82f6" 
                  strokeWidth="2" 
                />
                <defs>
                  <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.5 }} />
                    <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.3 }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* 加载状态 */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">正在加载核心技术...</p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {skillsData.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedSkill(skill)}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </div>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{skill.level}%</span>
                </div>
                <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((tech, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center flex flex-col items-center justify-center h-auto hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 cursor-pointer"
              onClick={() => setSelectedSkill(tech)}
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">{tech.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{tech.description}</p>
              <div className="mt-3">
                <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                  查看详情
                  <svg className="w-3 h-3 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 技术详情模态框 */}
        {selectedSkill && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                  {selectedSkill.details.title}
                </h2>
                
                <div className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">技术概述</h3>
                    {selectedSkill.details.content.map((paragraph, index) => (
                      <p key={index} className="mb-3">{paragraph}</p>
                    ))}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">应用领域</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedSkill.details.applications.map((app, index) => (
                        <div key={index} className="flex items-center">
                          <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {selectedSkill.details.courses && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">培训课程</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedSkill.details.courses.map((course, index) => (
                          <div key={index} className="flex items-center">
                            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                            <span>{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">技术优势</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedSkill.details.advantages.map((advantage, index) => (
                        <div key={index} className="flex items-center">
                          <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          <span>{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Skills
