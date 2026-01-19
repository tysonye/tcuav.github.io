const About = () => {
  const aboutContent = [
    {
      title: "公司简介",
      content: "安徽通程智能科技有限公司成立于2021年，是一家专注于无人机技术研发、CAAC培训、系统集成和行业应用的国家级高新技术企业。总部位于安徽省桐城市，在全国设有3个分支机构，拥有50+名员工，其中研发团队占比超过60%。公司持有安徽省CAAC培训资质，具备多机型、多等级的培训能力，已获得ISO9001质量管理体系认证、CE认证和20+项发明专利，是国内无人机行业的领先企业之一。"
    },
    {
      title: "我们的使命",
      content: "以创新的无人机技术为核心，赋能传统行业数字化转型，通过高效、安全、智能的空中解决方案，帮助客户提升生产效率，降低运营成本，创造更大价值。我们致力于成为全球领先的无人机系统集成商和行业应用解决方案提供商，打造'空天地一体化'服务能力。"
    }
  ];

  // 核心优势数据，使用卡片式布局
  const coreAdvantages = [
    {
      id: 1,
      title: "CAAC培训资质",
      description: "持有安徽省CAAC培训资质，具备多机型、多等级的培训能力",
      icon: "✈️"
    },
    {
      id: 2,
      title: "空天地一体化服务",
      description: "拥有'无人机+卫星遥感'融合应用体系，实现低空数据与高空数据的融合",
      icon: "🌍"
    },
    {
      id: 3,
      title: "AI智能识别技术",
      description: "针对水域场景的AI智能识别算法，对钓鱼竿、钓鱼人姿态的识别准确率达90%以上",
      icon: "🤖"
    },
    {
      id: 4,
      title: "强大的研发团队",
      description: "由无人机行业资深专家领衔，平均拥有10+年行业经验，与多所高校建立战略合作关系",
      icon: "👨‍🔬"
    },
    {
      id: 5,
      title: "全流程服务",
      description: "从需求分析、方案设计、产品开发到现场部署和售后支持，提供一站式解决方案",
      icon: "🔄"
    },
    {
      id: 6,
      title: "丰富的行业经验",
      description: "服务客户超过100家，涵盖电力、石油、农业、安防、林业等多个领域",
      icon: "🏢"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            关于我们
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-blue-600 dark:bg-blue-400 w-24 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            了解我们的技术、团队和无人机解决方案
          </p>
        </div>

        {/* 公司简介和使命 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          {/* 左侧图片 */}
          <div className="relative group">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-blue-600 dark:border-blue-400 group-hover:scale-105 transition-transform duration-500"></div>
            <div className="rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Professional%20drone%20development%20team%20working%20on%20advanced%20aerial%20technology%2C%20modern%20laboratory%2C%20innovative%20environment&sign=2cea00d74201af472d3f6f8be5724d9b" 
                alt="无人机研发团队" 
                className="w-full h-auto group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          {/* 右侧内容 */}
          <div className="space-y-8">
            {aboutContent.map((item, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center">
                  {index === 0 && <span className="mr-3 text-3xl">🏢</span>}
                  {index === 1 && <span className="mr-3 text-3xl">🎯</span>}
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 核心优势 - 卡片式布局 */}
        <div className="mb-24">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="inline-block relative">
              核心优势
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 bg-blue-600 dark:bg-blue-400 w-32 rounded-full"></div>
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreAdvantages.map((advantage) => (
              <div 
                key={advantage.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 group overflow-hidden"
              >
                {/* 卡片顶部装饰 */}
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"></div>
                
                {/* 卡片内容 */}
                <div className="p-8">
                  {/* 图标 */}
                  <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">
                    {advantage.icon}
                  </div>
                  
                  {/* 标题 */}
                  <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {advantage.title}
                  </h4>
                  
                  {/* 描述 */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 公司发展历程 - 优化设计 */}
        <div className="mb-24">
          <h3 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="inline-block relative">
              公司发展历程
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 bg-blue-600 dark:bg-blue-400 w-32 rounded-full"></div>
            </span>
          </h3>
          
          <div className="relative">
            {/* 时间轴线 - 优化设计 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 hidden md:block"></div>
            <div className="absolute left-16 top-0 h-full w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 md:hidden"></div>
            
            {/* 时间轴内容 */}
            <div className="space-y-16">
              {/* 2021年 - 左侧 */}
              <div className="relative">
                {/* 桌面视图 - 左侧内容 */}
                <div className="hidden md:flex items-center">
                  {/* 左侧内容区域 */}
                  <div className="w-1/2 pr-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                      <h4 className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">2021年：梦想启航</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">在桐城市保安服务有限公司的战略规划下，我们成立了低空事业部，正式开启无人机技术在安防领域的应用探索。这一年，我们组建了由航空专家、软件工程师和安防专业人士组成的核心团队，完成了首批无人机系统的技术验证和实地测试。通过与当地公安部门合作，我们成功实施了首个城市安防无人机巡逻项目，为后续发展奠定了坚实基础。同时，我们前瞻性地布局"无人机+AI"技术融合路径，为空天地一体化服务能力的构建埋下伏笔。</p>
                    </div>
                  </div>
                  
                  {/* 时间节点 - 中间 */}
                  <div className="flex-shrink-0 z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 text-white font-bold shadow-lg hover:scale-110 transition-all duration-300 border-4 border-white dark:border-gray-900 mx-8">
                    21
                  </div>
                  
                  {/* 右侧空白占位 */}
                  <div className="w-1/2"></div>
                </div>
                
                {/* 移动视图 */}
                <div className="flex items-start md:hidden">
                  {/* 时间节点 - 左侧 */}
                  <div className="flex-shrink-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 text-white font-bold shadow-lg hover:scale-110 transition-all duration-300 border-4 border-white dark:border-gray-900 mr-6 mt-2"></div>
                  
                  {/* 内容卡片 - 右侧 */}
                  <div className="flex-1">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                      <h4 className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">2021年：梦想启航</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">在桐城市保安服务有限公司的战略规划下，我们成立了低空事业部，正式开启无人机技术在安防领域的应用探索。这一年，我们组建了由航空专家、软件工程师和安防专业人士组成的核心团队，完成了首批无人机系统的技术验证和实地测试。通过与当地公安部门合作，我们成功实施了首个城市安防无人机巡逻项目，为后续发展奠定了坚实基础。同时，我们前瞻性地布局"无人机+AI"技术融合路径，为空天地一体化服务能力的构建埋下伏笔。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 2022年 - 右侧 */}
              <div className="relative">
                {/* 桌面视图 - 右侧内容 */}
                <div className="hidden md:flex items-center">
                  {/* 左侧空白占位 */}
                  <div className="w-1/2"></div>
                  
                  {/* 时间节点 - 中间 */}
                  <div className="flex-shrink-0 z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 text-white font-bold shadow-lg hover:scale-110 transition-all duration-300 border-4 border-white dark:border-gray-900 mx-8">
                    22
                  </div>
                  
                  <div className="w-1/2 pl-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                      <h4 className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">2022年：技术突破</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">面对日益复杂的安防需求，我们投入大量资源进行技术研发，成功开发出具备夜视、热成像和智能识别功能的无人机系统。这一年，我们的服务范围从城市安防扩展至森林防火、水域巡检等领域，并与多家政府部门建立了长期合作关系。通过持续的技术迭代，我们在无人机续航能力、抗风性能和数据处理速度方面取得显著突破。特别值得一提的是，我们针对水域场景的AI智能识别算法初步成型，为后续钓鱼行为精准识别奠定技术基础。</p>
                    </div>
                  </div>
                </div>
                
                {/* 移动视图 */}
                <div className="flex items-start md:hidden">
                  {/* 时间节点 - 左侧 */}
                  <div className="flex-shrink-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 text-white font-bold shadow-lg hover:scale-110 transition-all duration-300 border-4 border-white dark:border-gray-900 mr-6 mt-2"></div>
                  
                  {/* 内容卡片 - 右侧 */}
                  <div className="flex-1">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                      <h4 className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">2022年：技术突破</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">面对日益复杂的安防需求，我们投入大量资源进行技术研发，成功开发出具备夜视、热成像和智能识别功能的无人机系统。这一年，我们的服务范围从城市安防扩展至森林防火、水域巡检等领域，并与多家政府部门建立了长期合作关系。通过持续的技术迭代，我们在无人机续航能力、抗风性能和数据处理速度方面取得显著突破。特别值得一提的是，我们针对水域场景的AI智能识别算法初步成型，为后续钓鱼行为精准识别奠定技术基础。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 2023年 - 左侧 */}
              <div className="relative">
                {/* 桌面视图 - 左侧内容 */}
                <div className="hidden md:flex items-center">
                  {/* 左侧内容区域 */}
                  <div className="w-1/2 pr-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                      <h4 className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">2023年：市场拓展与资质建设</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">随着技术的成熟和市场认可度的提升，我们的业务版图迅速扩大。这一年，我们成功将无人机解决方案应用于农业植保、电力巡检和应急救援等多个领域，服务范围覆盖安徽、河南、江苏等多个省份。我们建立了完善的培训体系，成功获得安徽省CAAC培训资质，开始系统化培养专业的无人机操作员和维护工程师，为客户提供全方位的技术支持。同时，我们开始布局知识产权，申请了多项无人机控制系统和数据分析算法的专利。</p>
                    </div>
                  </div>
                  
                  {/* 时间节点 - 中间 */}
                  <div className="flex-shrink-0 z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 text-white font-bold shadow-lg hover:scale-110 transition-all duration-300 border-4 border-white dark:border-gray-900 mx-8">
                    23
                  </div>
                  
                  {/* 右侧空白占位 */}
                  <div className="w-1/2"></div>
                </div>
                
                {/* 移动视图 */}
                <div className="flex items-start md:hidden">
                  {/* 时间节点 - 左侧 */}
                  <div className="flex-shrink-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 text-white font-bold shadow-lg hover:scale-110 transition-all duration-300 border-4 border-white dark:border-gray-900 mr-6 mt-2"></div>
                  
                  {/* 内容卡片 - 右侧 */}
                  <div className="flex-1">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                      <h4 className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">2023年：市场拓展与资质建设</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">随着技术的成熟和市场认可度的提升，我们的业务版图迅速扩大。这一年，我们成功将无人机解决方案应用于农业植保、电力巡检和应急救援等多个领域，服务范围覆盖安徽、河南、江苏等多个省份。我们建立了完善的培训体系，成功获得安徽省CAAC培训资质，开始系统化培养专业的无人机操作员和维护工程师，为客户提供全方位的技术支持。同时，我们开始布局知识产权，申请了多项无人机控制系统和数据分析算法的专利。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 2024年 - 右侧 */}
              <div className="relative">
                {/* 桌面视图 - 右侧内容 */}
                <div className="hidden md:flex items-center">
                  {/* 左侧空白占位 */}
                  <div className="w-1/2"></div>
                  
                  {/* 时间节点 - 中间 */}
                  <div className="flex-shrink-0 z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 text-white font-bold shadow-lg hover:scale-110 transition-all duration-300 border-4 border-white dark:border-gray-900 mx-8">
                    24
                  </div>
                  
                  <div className="w-1/2 pl-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                      <h4 className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">2024年：体系化升级</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">在积累了丰富的行业经验和客户资源后，我们制定了更加宏大的发展战略。这一年，我们加大研发投入，成立了专门的AI算法团队，致力于提升无人机的自主决策能力和数据处理效率。我们与多所高校和科研机构建立合作关系，共建无人机技术创新实验室。同时，我们构建了完整的无人机解决方案体系，服务客户突破100家，营收达到5000万元，为后续的高速发展打下坚实基础。</p>
                    </div>
                  </div>
                </div>
                
                {/* 移动视图 */}
                <div className="flex items-start md:hidden">
                  {/* 时间节点 - 左侧 */}
                  <div className="flex-shrink-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 text-white font-bold shadow-lg hover:scale-110 transition-all duration-300 border-4 border-white dark:border-gray-900 mr-6 mt-2"></div>
                  
                  {/* 内容卡片 - 右侧 */}
                  <div className="flex-1">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                      <h4 className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">2024年：体系化升级</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">在积累了丰富的行业经验和客户资源后，我们制定了更加宏大的发展战略。这一年，我们加大研发投入，成立了专门的AI算法团队，致力于提升无人机的自主决策能力和数据处理效率。我们与多所高校和科研机构建立合作关系，共建无人机技术创新实验室。同时，我们构建了完整的无人机解决方案体系，服务客户突破100家，营收达到5000万元，为后续的高速发展打下坚实基础。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 2025年 - 左侧 */}
              <div className="relative">
                {/* 桌面视图 - 左侧内容 */}
                <div className="hidden md:flex items-center">
                  {/* 左侧内容区域 */}
                  <div className="w-1/2 pr-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                      <h4 className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">2025年：扬帆起航与荣耀加冕</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">经过四年的技术积累和市场验证，我们迎来了重要里程碑——正式成立安徽通程智能科技有限公司，并获得"国家级专精特新小巨人企业"称号。新公司承载着我们在低空经济领域的远大愿景，以"科技守护安全，智能服务社会"为使命，致力于成为国内领先的无人机智能解决方案提供商。这一年，我们成功推出5G+AI智能无人机平台，拓展东南亚市场，营收突破1.2亿元。我们拥有完整的研发、生产、销售和服务体系，建立了覆盖全国的服务网络，真正实现了"空天地一体化"服务能力的落地。</p>
                    </div>
                  </div>
                  
                  {/* 时间节点 - 中间 */}
                  <div className="flex-shrink-0 z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 text-white font-bold shadow-lg hover:scale-110 transition-all duration-300 border-4 border-white dark:border-gray-900 mx-8">
                    25
                  </div>
                  
                  {/* 右侧空白占位 */}
                  <div className="w-1/2"></div>
                </div>
                
                {/* 移动视图 */}
                <div className="flex items-start md:hidden">
                  {/* 时间节点 - 左侧 */}
                  <div className="flex-shrink-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 text-white font-bold shadow-lg hover:scale-110 transition-all duration-300 border-4 border-white dark:border-gray-900 mr-6 mt-2"></div>
                  
                  {/* 内容卡片 - 右侧 */}
                  <div className="flex-1">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                      <h4 className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">2025年：扬帆起航与荣耀加冕</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">经过四年的技术积累和市场验证，我们迎来了重要里程碑——正式成立安徽通程智能科技有限公司，并获得"国家级专精特新小巨人企业"称号。新公司承载着我们在低空经济领域的远大愿景，以"科技守护安全，智能服务社会"为使命，致力于成为国内领先的无人机智能解决方案提供商。这一年，我们成功推出5G+AI智能无人机平台，拓展东南亚市场，营收突破1.2亿元。我们拥有完整的研发、生产、销售和服务体系，建立了覆盖全国的服务网络，真正实现了"空天地一体化"服务能力的落地。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 2026年 - 右侧 */}
              <div className="relative">
                {/* 桌面视图 - 右侧内容 */}
                <div className="hidden md:flex items-center">
                  {/* 左侧空白占位 */}
                  <div className="w-1/2"></div>
                  
                  {/* 时间节点 - 中间 */}
                  <div className="flex-shrink-0 z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 text-white font-bold shadow-lg hover:scale-110 transition-all duration-300 border-4 border-white dark:border-gray-900 mx-8">
                    26
                  </div>
                  
                  <div className="w-1/2 pl-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                      <h4 className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">2026年：创新引领</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">站在"十五五"规划开局之年的历史节点，安徽通程智能科技有限公司迎来了全面发展的新阶段。这一年，我们积极响应国家低空经济发展战略，申报成为安徽省重点科技创新企业。我们发布了行业首款"无人机+元宇宙"融合平台，建立了无人机数字孪生系统，与国内20+高校建立产学研合作基地，并启动科创板上市筹备工作。
在技术层面，我们的"天眼"智能巡检系统完成3.0版本升级，融合最新的AI大模型技术，实现了对复杂场景的自主识别和决策能力，准确率提升至98.5%。水域场景AI智能识别算法进一步优化，对钓鱼竿、钓鱼人姿态的识别准确率达到90%以上，成为行业标杆。
在市场拓展方面，我们与国家电网、中粮集团等央企建立战略合作关系，承接了多个省级重大无人机应用示范项目。我们的农业植保服务覆盖面积突破500万亩，帮助农户增产增收的同时，减少农药使用量30%，为国家绿色农业发展贡献力量。在技术创新上，我们成功研发出国内首款全自主垂直起降固定翼无人机，续航时间达到4小时，作业半径扩展至200公里，填补了国内该领域的技术空白。</p>
                    </div>
                  </div>
                </div>
                
                {/* 移动视图 */}
                <div className="flex items-start md:hidden">
                  {/* 时间节点 - 左侧 */}
                  <div className="flex-shrink-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 text-white font-bold shadow-lg hover:scale-110 transition-all duration-300 border-4 border-white dark:border-gray-900 mr-6 mt-2"></div>
                  
                  {/* 内容卡片 - 右侧 */}
                  <div className="flex-1">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                      <h4 className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">2026年：创新引领</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">站在"十五五"规划开局之年的历史节点，安徽通程智能科技有限公司迎来了全面发展的新阶段。这一年，我们积极响应国家低空经济发展战略，申报成为安徽省重点科技创新企业。我们发布了行业首款"无人机+元宇宙"融合平台，建立了无人机数字孪生系统，与国内20+高校建立产学研合作基地，并启动科创板上市筹备工作。
在技术层面，我们的"天眼"智能巡检系统完成3.0版本升级，融合最新的AI大模型技术，实现了对复杂场景的自主识别和决策能力，准确率提升至98.5%。水域场景AI智能识别算法进一步优化，对钓鱼竿、钓鱼人姿态的识别准确率达到90%以上，成为行业标杆。
在市场拓展方面，我们与国家电网、中粮集团等央企建立战略合作关系，承接了多个省级重大无人机应用示范项目。我们的农业植保服务覆盖面积突破500万亩，帮助农户增产增收的同时，减少农药使用量30%，为国家绿色农业发展贡献力量。在技术创新上，我们成功研发出国内首款全自主垂直起降固定翼无人机，续航时间达到4小时，作业半径扩展至200公里，填补了国内该领域的技术空白。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 公司数据统计 - 优化设计 */}
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="inline-block relative">
              公司数据
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 w-32 rounded-full"></div>
            </span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* 年行业经验 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center group">
              <div className="text-6xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 group-hover:scale-110 transition-transform duration-300">
                5+</div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">年行业经验</p>
            </div>
            
            {/* 合作客户 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center group">
              <div className="text-6xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 group-hover:scale-110 transition-transform duration-300">
                100+</div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">合作客户</p>
            </div>
            
            {/* 专利与软著 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center group">
              <div className="text-6xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 dark:from-pink-400 dark:to-orange-400 group-hover:scale-110 transition-transform duration-300">
                20+</div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">专利与软著</p>
            </div>
            
            {/* 专业团队 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center group">
              <div className="text-6xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-400 dark:to-blue-400 group-hover:scale-110 transition-transform duration-300">
                50+</div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">专业团队</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About