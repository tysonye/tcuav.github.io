// 这个文件在生产环境中不再使用
// 网站现在使用完全独立的静态HTML文件部署
// 此文件仅用于开发环境预览


const DeploymentGuide = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">GitHub Pages 部署指南（静态HTML版本）</h1>
        
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8">
          <p className="text-green-700">
            ✅ MIME类型错误问题已通过静态HTML方式彻底解决！
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">静态HTML部署方案说明</h2>
          <div className="bg-blue-50 p-4 rounded-md mb-6">
            <p className="text-blue-700 font-medium">
              我们已将项目转换为静态HTML模式部署，这是解决GitHub Pages上MIME类型错误的最可靠方法。
            </p>
          </div>
          <p className="text-gray-600 mb-4">
            新的部署方案有以下优势：
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>✅ 完全避免模块加载导致的MIME类型错误</li>
            <li>✅ 无需复杂的构建流程和依赖管理</li>
            <li>✅ 更快的页面加载速度和更好的SEO表现</li>
            <li>✅ 更强的兼容性，支持各种浏览器和托管环境</li>
            <li>✅ 所有内容都内联在HTML中，确保可靠显示</li>
          </ul>
        </div>
        
        <h2 className="text-2xl font-bold mb-4 text-gray-800">部署流程说明</h2>
        
        <div className="space-y-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
              自动部署流程
            </h3>
            <p className="text-gray-600 mb-3">
              项目使用GitHub Actions实现自动部署：
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>当代码推送到main分支时，GitHub Actions会自动触发</li>
              <li>工作流文件位置：<code className="bg-gray-200 px-2 py-1 rounded">.github/workflows/deploy.yml</code></li>
              <li>部署过程简化为直接复制HTML文件到gh-pages分支</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
              本地开发流程
            </h3>
            <p className="text-gray-600 mb-3">
              您可以继续使用以下命令进行本地开发：
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4">
              <code>{`# 安装依赖（仅开发环境需要）
npm install

# 启动开发服务器
npm run dev

# 预览生产版本
npm run preview`}</code>
            </pre>
            <p className="text-gray-600">
              开发环境仍使用React+Vite提供更好的开发体验，但生产部署使用静态HTML。
            </p>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-4 text-gray-800">检查与验证</h2>
        
        <div className="space-y-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">查看部署状态</h3>
            <p className="text-gray-600 mb-3">
              部署完成后，您可以：
            </p>
            <ol className="list-decimal pl-6 text-gray-600 space-y-2">
              <li>在"Settings" {'>'} "Pages"中确认部署状态和访问URL</li>
              <li>访问提供的GitHub Pages URL查看网站</li>
              <li>清除浏览器缓存并刷新页面查看最新效果</li>
            </ol>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">favicon设置</h3>
            <p className="text-gray-600 mb-3">
              网站已配置使用本地favicon图标：
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
              <p className="text-green-700">
                ✅ favicon已成功配置并放置在项目根目录
              </p>
            </div>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>图标文件位置：<code className="bg-gray-200 px-2 py-0.5 rounded">/favicon.ico</code></li>
              <li>项目已正确引用该文件</li>
              <li>清除浏览器缓存后即可看到更新的图标</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="#" 
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
          >
            返回首页
          </a>
        </div>
      </div>
    </div>
  )
}

export default DeploymentGuide