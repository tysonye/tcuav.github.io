const About = () => {
  const aboutContent = [
    {
      title: "公司简介",
      content: "安徽通程智能科技有限公司成立于2021年，是一家专注于无人机技术研发、CAAC培训、系统集成和行业应用的国家级高新技术企业。总部位于安徽省合肥市，在全国设有3个分支机构，拥有50+名员工，其中研发团队占比超过60%。公司持有安徽省CAAC培训资质，具备多机型、多等级的培训能力，已获得ISO9001质量管理体系认证、CE认证和20+项发明专利，是国内无人机行业的领先企业之一。"
    },
    {
      title: "我们的使命",
      content: "以创新的无人机技术为核心，赋能传统行业数字化转型，通过高效、安全、智能的空中解决方案，帮助客户提升生产效率，降低运营成本，创造更大价值。我们致力于成为全球领先的无人机系统集成商和行业应用解决方案提供商，打造'空天地一体化'服务能力。"
    },
    {
      title: "核心优势",
      content: "1. CAAC培训资质：持有安徽省CAAC培训资质，具备多机型、多等级的培训能力；2. 空天地一体化服务：拥有'无人机+卫星遥感'融合应用体系，实现低空数据与高空数据的融合；3. AI智能识别技术：针对水域场景的AI智能识别算法，对钓鱼竿、钓鱼人姿态的识别准确率达90%以上；4. 强大的研发团队：由无人机行业资深专家领衔，平均拥有10+年行业经验，与多所高校建立战略合作关系；5. 全流程服务：从需求分析、方案设计、产品开发到现场部署和售后支持，提供一站式解决方案；6. 丰富的行业经验：服务客户超过100家，涵盖电力、石油、农业、安防、林业等多个领域。"
    }
  ]

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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-blue-600 dark:border-blue-400 group-hover:scale-105 transition-transform duration-500"></div>
            <div className="rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Professional%20drone%20development%20team%20working%20on%20advanced%20aerial%20technology%2C%20modern%20laboratory%2C%20innovative%20environment&sign=2cea00d74201af472d3f6f8be5724d9b" 
                alt="无人机研发团队" 
                className="w-full h-auto group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="space-y-8">
            {aboutContent.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 新增：公司发展历程 */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">公司发展历程</h3>
          <div className="relative">
            {/* 时间轴线 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-800/50"></div>
            
            {/* 时间轴内容 */}
            <div className="space-y-12">
              {/* 2021年 */}
              <div className="flex items-center justify-between flex-row-reverse md:flex-row">
                <div className="w-5/12 md:w-1/2 md:pr-12 text-right">
                  <h4 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">2021年</h4>
                  <p className="text-gray-600 dark:text-gray-300">公司成立，专注于无人机技术研发，核心团队组建完成</p>
                </div>
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-400 text-white font-bold">21</div>
                <div className="w-5/12 md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
              
              {/* 2022年 */}
              <div className="flex items-center justify-between">
                <div className="w-5/12 md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-400 text-white font-bold">22</div>
                <div className="w-5/12 md:w-1/2 md:pl-12">
                  <h4 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">2022年</h4>
                  <p className="text-gray-600 dark:text-gray-300">推出首款自主研发的工业巡检无人机，获得3项发明专利</p>
                </div>
              </div>
              
              {/* 2023年 */}
              <div className="flex items-center justify-between flex-row-reverse md:flex-row">
                <div className="w-5/12 md:w-1/2 md:pr-12 text-right">
                  <h4 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">2023年</h4>
                  <p className="text-gray-600 dark:text-gray-300">获得国家级高新技术企业认定，业务拓展至全国15个省市</p>
                </div>
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-400 text-white font-bold">23</div>
                <div className="w-5/12 md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
              
              {/* 2024年 */}
              <div className="flex items-center justify-between">
                <div className="w-5/12 md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-400 text-white font-bold">24</div>
                <div className="w-5/12 md:w-1/2 md:pl-12">
                  <h4 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">2024年</h4>
                  <p className="text-gray-600 dark:text-gray-300">建立完整的无人机解决方案体系，服务客户超过100家，营收突破5000万元</p>
                </div>
              </div>
              
              {/* 2025年 */}
              <div className="flex items-center justify-between flex-row-reverse md:flex-row">
                <div className="w-5/12 md:w-1/2 md:pr-12 text-right">
                  <h4 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">2025年</h4>
                  <p className="text-gray-600 dark:text-gray-300">成功推出5G+AI智能无人机平台，拓展东南亚市场，营收突破1.2亿元，获得国家级专精特新小巨人企业称号</p>
                </div>
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-400 text-white font-bold">25</div>
                <div className="w-5/12 md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
              
              {/* 2026年 */}
              <div className="flex items-center justify-between">
                <div className="w-5/12 md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-400 text-white font-bold">26</div>
                <div className="w-5/12 md:w-1/2 md:pl-12">
                  <h4 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">2026年</h4>
                  <p className="text-gray-600 dark:text-gray-300">发布行业首款"无人机+元宇宙"融合平台，建立无人机数字孪生系统，与国内20+高校建立产学研合作基地，启动科创板上市筹备</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h4 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</h4>
            <p className="text-gray-600 dark:text-gray-300">年行业经验</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h4 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">100+</h4>
            <p className="text-gray-600 dark:text-gray-300">合作客户</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h4 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">20+</h4>
            <p className="text-gray-600 dark:text-gray-300">专利与软著</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h4 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</h4>
            <p className="text-gray-600 dark:text-gray-300">专业团队</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About