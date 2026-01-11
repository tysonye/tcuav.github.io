

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col">
      <div className="container mx-auto px-4 py-20 flex-grow flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            UAV 无人机技术
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10">
            专业无人机技术与解决方案提供商
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">网站部署状态</h2>
            <p className="text-gray-600 mb-6">
              网站已成功部署到GitHub Pages。如果您遇到页面显示问题，请查看我们的部署指南。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                访问GitHub仓库
              </a>
              <a 
                href="#" 
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-full transition-all duration-300 flex items-center justify-center"
              >
                部署指南
              </a>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-blue-600">工业巡检</h3>
              <p className="text-gray-600">
                专业的工业设施巡检解决方案，提高效率，降低成本。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-blue-600">农业植保</h3>
              <p className="text-gray-600">
                精准农业无人机，实现高效、环保的作物保护。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-blue-600">安防监控</h3>
              <p className="text-gray-600">
                智能安防监控系统，保障区域安全。
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} UAV 无人机技术. 保留所有权利.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home