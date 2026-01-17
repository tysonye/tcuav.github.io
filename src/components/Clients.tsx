const Clients = () => {
  // 客户案例数据
  const caseStudies = [
    {
      id: 1,
      title: "电力巡检无人机系统",
      industry: "电力行业",
      description: "为某电力公司提供的无人机巡检系统，实现了输电线路的自动化巡检，大幅提高了巡检效率，降低了人工成本和安全风险。",
      imageUrl: "/image/dlxj.jpg",
      results: [
        "巡检效率提升80%",
        "人工成本降低60%",
        "发现隐患准确率99%",
        "年维护成本降低50%"
      ]
    },
    {
      id: 2,
      title: "农业植保无人机解决方案",
      industry: "农业领域",
      description: "为农业合作社提供的无人机植保解决方案，实现了精准喷洒、病虫害监测和作物生长分析，提高了农作物产量和质量。",
      imageUrl: "/image/nyzb.jpg",
      results: [
        "农药使用量减少30%",
        "作物产量提升15%",
        "作业效率提高10倍",
        "水资源节约40%"
      ]
    },
    {
      id: 3,
      title: "城市安防监控系统",
      industry: "安防领域",
      description: "为城市管理部门提供的无人机安防监控系统，实现了城市重点区域的实时监控、应急响应和事件处理，提升了城市管理水平。",
      imageUrl: "/image/csaf.jpg",
      results: [
        "应急响应时间缩短50%",
        "监控覆盖范围扩大3倍",
        "事件处理效率提升60%",
        "人力投入减少40%"
      ]
    }
  ];

  // 合作伙伴数据
  const partners = [
    { id: 1, name: "国家电网", logo: "🏢" },
    { id: 2, name: "中国农业科学院", logo: "🔬" },
    { id: 3, name: "公安部第一研究所", logo: "🛡️" },
    { id: 4, name: "中国科学院", logo: "⚗️" },
    { id: 5, name: "清华大学", logo: "🎓" },
    { id: 6, name: "安徽省科技厅", logo: "🏛️" }
  ];

  return (
    <section id="clients" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* 标题部分 */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            客户案例
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full mx-auto mb-6"></div>
          <p className="section-subtitle">
            我们的无人机解决方案已在多个行业得到成功应用，为客户创造了显著价值
          </p>
        </div>

        {/* 客户案例卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {caseStudies.map((caseStudy) => (
            <div 
              key={caseStudy.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 dark:border-gray-700 overflow-hidden group animate-slide-up"
              style={{ animationDelay: `${caseStudy.id * 0.1}s` }}
            >
              {/* 案例图片 */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={caseStudy.imageUrl} 
                  alt={caseStudy.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* 案例内容 */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {caseStudy.title}
                  </h3>
                  <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full">
                    {caseStudy.industry}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-5 line-clamp-3">
                  {caseStudy.description}
                </p>
                
                {/* 案例成果 */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">项目成果：</h4>
                  <ul className="space-y-1">
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <svg className="w-4 h-4 text-blue-500 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 合作伙伴部分 */}
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              合作伙伴
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300">
              与行业领先企业和研究机构建立了长期战略合作关系
            </p>
          </div>
          
          {/* 合作伙伴网格 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner) => (
              <div 
                key={partner.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center justify-center p-6 border border-gray-100 dark:border-gray-700"
              >
                <div className="text-4xl mb-3">{partner.logo}</div>
                <h4 className="text-gray-800 dark:text-white font-semibold text-center">{partner.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients