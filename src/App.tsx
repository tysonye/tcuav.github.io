import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import News from './components/News';
import Quiz from './components/Quiz';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import { initSmoothScroll } from './utils/smoothScroll';

// 法律声明内容
const legalDeclaration = `法律声明
生效日期：2026年1月15日

1. 网站所有权
通程智能科技有限公司（以下简称"本公司"）拥有本网站（https://uav.xibai.xin/）的所有权，包括但不限于网站设计、结构、内容、功能等。

2. 版权声明
本网站所有内容（文字、图片、视频、数据、软件等）受《中华人民共和国著作权法》及相关国际知识产权公约保护
未经本公司书面授权，任何个人或机构不得以任何形式（包括复制、修改、分发、销售、展示等）使用网站内容
为个人学习、研究或欣赏目的，在指明作者姓名、作品名称和出处的前提下，可适当引用本网站内容

3. 商标声明
本网站展示的所有商标、标识、商号（包括但不限于"通程智能"、"TCUAV"等）均为本公司或其许可方所有
未经书面授权，不得使用上述商标进行任何形式的商业活动
本声明不视为对任何第三方商标的授权

4. 免责声明
本网站内容力求准确完整，但不保证信息绝对准确、完整、及时，不承担因信息错误或更新不及时造成的损失
无人机技术发展迅速，产品参数、性能可能更新，本网站内容仅供参考，不构成购买决策的唯一依据
您因使用或依赖本网站信息而造成的任何直接或间接损失，本公司不承担责任
您在实际操作无人机前，应接受专业培训并严格遵守国家相关法律法规

5. 第三方内容与链接
本网站可能包含第三方内容或链接至第三方网站，这些内容和链接不代表本公司的观点或认可
您访问第三方网站的风险由您自行承担，本公司不对第三方网站内容、隐私政策或操作负责
如发现第三方内容侵权，请通过官方渠道通知我们，我们将依法处理

6. 责任限制
在法律允许的最大范围内，本公司不对因使用或无法使用本网站而引起的任何直接、间接、偶然、特殊或后果性损害承担责任，包括但不限于利润损失、数据丢失、业务中断等。

7. 法律管辖
本法律声明的解释、效力及执行均适用中华人民共和国法律。任何因本声明引起的争议，应首先通过友好协商解决；协商不成的，应提交本公司所在地有管辖权的人民法院诉讼解决。

8. 声明更新
本公司保留随时修改本法律声明的权利，修改后的声明将在网站公布后生效。请定期查阅最新版本。

9. 联系方式
如对本声明有任何疑问，或需报告侵权行为，请通过以下方式联系我们：

电话：+86 13397155725
地址：安徽省桐城市文昌街道和平路和平尚城6#209室`;

function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [showLegalModal, setShowLegalModal] = useState(false);
  
  useEffect(() => {
    // 初始化平滑滚动
    initSmoothScroll();
  }, []);
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <News />
        <Quiz />
        <Contact />
      </main>
      <Footer onLegalClick={() => setShowLegalModal(true)} />
      
      {/* 法律声明模态框 */}
      {showLegalModal && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowLegalModal(false);
            }
          }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <button
                onClick={() => setShowLegalModal(false)}
                className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">法律声明</h2>
              <div className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {legalDeclaration}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;