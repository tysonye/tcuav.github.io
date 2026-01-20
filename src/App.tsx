import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Clients from './components/Clients';
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

// 服务条款内容
const termsOfService = `服务条款
生效日期：2026年1月15日

1. 服务范围
通程智能科技有限公司（以下简称"本公司"）通过网站（https://uav.xibai.xin/）向用户提供无人机解决方案展示、技术咨询、产品信息等服务（以下简称本服务）。

2. 账户注册
使用部分功能需注册账户，您应提供真实、准确、完整的个人信息
您有责任维护账户安全，对账户下的所有活动承担责任
如发现账户异常，请立即通知我们

3. 用户义务
不得利用本服务从事违法违规活动
不得上传或传播违法、侵权、色情、暴力等内容
不得干扰本服务正常运行或损害其他用户权益
遵守无人机相关法律法规，在合法授权范围内使用无人机相关技术与服务

4. 服务变更与终止
我们保留在不事先通知的情况下变更、暂停或终止部分或全部服务的权利
您可在任何时候停止使用本服务
违反本条款时，我们有权终止或限制您使用服务

5. 免责声明
本网站内容仅供参考，不构成专业建议，使用相关技术前请咨询专业人士
无人机操作涉及安全风险，使用我们推荐的产品或技术方案需遵守当地法律法规
我们不对因不可抗力、第三方行为、用户误操作等导致的损失承担责任
您理解并同意，无人机在农业、林业、电力等领域的应用效果可能受环境、气候、操作等多种因素影响

6. 知识产权
本网站所有内容（包括文字、图片、视频、软件等）的知识产权归本公司或授权方所有
未经书面许可，不得复制、修改、传播或用于商业目的
您在使用服务过程中创造的内容，其权利归属根据具体约定确定

7. 适用法律与争议解决
本条款的解释、效力及纠纷解决均适用中华人民共和国法律
任何因本条款引起的争议，应通过友好协商解决；协商不成的，提交本公司所在地有管辖权的人民法院诉讼解决

8. 条款修改
我们可能不定期更新本条款。修改后的条款将通过网站公布，您继续使用服务即视为接受修改。重大变更将提前通知。`;

// 隐私策略内容
const privacyPolicy = `隐私策略
生效日期：2026年1月15日

1. 引言
通程智能科技有限公司（以下简称"我们"或"本公司"）尊重并保护您的个人隐私。本隐私政策旨在向您说明我们如何收集、使用、存储和保护您在使用通程智能网站（https://uav.xibai.xin/，以下简称"本网站"）时提供的个人信息。

2. 我们收集的信息
个人身份信息：当您注册账户、咨询产品或服务时，我们可能会收集您的姓名、联系方式、电子邮箱、公司信息等。
设备与使用信息：包括IP地址、浏览器类型、操作系统、访问时间、页面浏览记录等。
无人机相关数据：若您使用我们的无人机相关服务，我们可能会收集飞行数据、地理位置信息、作业区域图像等（仅在获得您明确授权的情况下）。

3. 信息使用目的
为您提供产品咨询、技术支持和售后服务
改进我们的产品与服务，开发新功能
发送您可能感兴趣的产品更新、行业资讯（您可以随时退订）
履行法律法规要求的义务
保障网站与服务的安全稳定运行

4. 信息共享与披露
我们不会将您的个人信息出售给第三方。仅在以下情况可能共享信息：
获得您的明确同意
为提供您所需服务而必须与服务提供商共享
遵守法律法规或响应政府部门要求
保护本公司、用户或公众的合法权益

5. 您的权利
您有权：
查询、更正或补充您的个人信息
删除您的个人信息
撤回对个人信息处理的同意
获取您的个人信息副本
限制或拒绝我们处理您的个人信息

6. 数据安全
我们采用符合行业标准的安全措施保护您的个人信息，包括数据加密、访问控制、安全审计等，防止数据遭到未经授权的访问、泄露、篡改或销毁。

7. Cookie政策
本网站使用Cookie技术优化用户体验。您可以通过浏览器设置拒绝或删除Cookie，但这可能影响部分功能的正常使用。

8. 隐私政策更新
我们可能会不定期更新本隐私政策。重大变更将通过网站公告或邮件通知您。请您定期查看本政策的最新版本。

9. 联系我们
如对本隐私政策有任何疑问，或需行使您的个人信息权利，请通过以下方式联系我们：

电话：+86 13397155725
地址：安徽省桐城市文昌街道和平路和平尚城6#209室`;

// 常见问题内容
const faqContent = `常见问题 (FAQ)
无人机基础操作
Q: 无人机操作需要专业执照吗？
A: 根据中国民航局规定，商用无人机操作需持有相应执照。我们提供专业培训课程，帮助用户通过相关考试，同时我们的无人机系统设计为操作简便，新手经2天培训即可上手操作。
Q: 无人机的续航时间和作业半径是多少？
A: 标准机型续航时间为35-45分钟，最大作业半径10公里。针对大型农田或广域巡检需求，我们提供多电池系统和快速充电解决方案，可实现连续作业8小时以上。
Q: 无人机在雨天或大风天气能使用吗？
A: 我们的无人机系统具备IP54防护等级，可在小雨和5级以下风力条件下正常工作。为确保安全和作业效果，我们建议在4级风力以上避免作业。
行业应用
Q: 无人机植保比传统方式效率提升多少？
A: 无人机植保效率是人工的8-12倍，每小时可作业50-100亩，同时减少农药使用量20-30%，作业精度提高40%。我们已为陕西、河南等多地农业合作社实现显著增产增收。
Q: 电力巡检中无人机如何识别故障？
A: 我们的AI识别系统可自动检测绝缘子破损、线路断裂等故障，准确率高达95%。系统会生成详细报告，包括故障位置、类型和严重程度，帮助电力部门快速定位和处理问题。
Q: 林业巡护中无人机能监测哪些内容？
A: 无人机可监测森林火灾风险、病虫害情况、树木生长状况和非法砍伐行为。通过定期飞行，我们提供森林健康状况的长期监测数据，为林业管理提供科学依据。
产品与服务
Q: 如何选择适合我行业的无人机解决方案？
A: 我们提供专业需求分析服务。只需填写简单问卷或联系销售顾问，我们将根据您的行业特点、作业规模和预算，推荐最适合的解决方案，并提供详细对比分析。
Q: 产品保修期是多久？
A: 我们提供1年整机保修服务，关键部件（如电机、电池）提供2年保修。保修期内，非人为损坏的故障我们将免费维修或更换。
Q: 是否提供定制化服务？
A: 是的，我们提供定制化解决方案，包括特殊功能开发、软件定制和硬件改装，以满足特定行业需求。我们的定制服务已成功应用于多个行业项目。`;

// 技术支持内容
const techSupportContent = `技术支持
我们的技术支持服务
7×24小时专业支持
电话支持：199-5567-4323（工作日 9:00-18:00，节假日技术支持在线）

技术支持流程
提交问题：通过电话提交问题
问题响应：30分钟内响应，紧急问题15分钟内响应
问题处理：分配给相应领域的专家，提供解决方案
问题解决：远程协助或安排现场支持
效果反馈：问题解决后进行满意度调查

培训与学习
基础操作培训：新用户可免费参加2天系统培训
进阶技能课程：每月定期举办行业应用进阶培训
认证考试：通过考核可获得认证证书

技术支持承诺
一般问题：2小时内响应
紧急问题：30分钟内响应
现场支持：全国主要城市48小时内到达

通程智能科技有限公司
地址：安徽省桐城市盛唐北路100号
电话：+86 19955674323
官网：https://uav.xibai.xin/`;

function App() {
  useTheme();
  const [showLegalModal, setShowLegalModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showFAQModal, setShowFAQModal] = useState(false);
  const [showTechSupportModal, setShowTechSupportModal] = useState(false);
  
  useEffect(() => {
    // 初始化平滑滚动
    initSmoothScroll();
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Clients />
        <News />
        <Quiz />
        <Contact />
      </main>
      <Footer 
        onLegalClick={() => setShowLegalModal(true)}
        onTermsClick={() => setShowTermsModal(true)}
        onPrivacyClick={() => setShowPrivacyModal(true)}
        onFAQClick={() => setShowFAQModal(true)}
        onTechSupportClick={() => setShowTechSupportModal(true)}
      />
      
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
      
      {/* 服务条款模态框 */}
      {showTermsModal && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowTermsModal(false);
            }
          }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <button
                onClick={() => setShowTermsModal(false)}
                className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">服务条款</h2>
              <div className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {termsOfService}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* 隐私策略模态框 */}
      {showPrivacyModal && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowPrivacyModal(false);
            }
          }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">隐私策略</h2>
              <div className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {privacyPolicy}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* 常见问题模态框 */}
      {showFAQModal && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowFAQModal(false);
            }
          }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <button
                onClick={() => setShowFAQModal(false)}
                className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">常见问题</h2>
              <div className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {faqContent}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* 技术支持模态框 */}
      {showTechSupportModal && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowTechSupportModal(false);
            }
          }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <button
                onClick={() => setShowTechSupportModal(false)}
                className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">技术支持</h2>
              <div className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {techSupportContent}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;