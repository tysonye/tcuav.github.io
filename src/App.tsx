import { useEffect } from 'react';
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

function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  
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
      <Footer />
    </div>
  );
}

export default App;