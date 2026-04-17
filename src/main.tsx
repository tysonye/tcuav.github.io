import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initSmoothScroll } from './utils/smoothScroll';

try {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    // 初始化平滑滚动
    initSmoothScroll();
  }
} catch (error) {
  console.error('应用渲染失败:', error);
}