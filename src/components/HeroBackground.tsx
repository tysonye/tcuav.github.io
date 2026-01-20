import { useRef, useEffect, useState } from 'react';

const HeroBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (videoRef.current && !videoError) {
      videoRef.current.play().catch(err => {
        console.error('Video play error:', err);
        setVideoError(true);
      });
    }
  }, [videoError]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 视频背景 - 带错误处理 */}
      {!videoError ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onError={() => setVideoError(true)}
        >
          {/* 使用本地视频源 */}
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      ) : (
        /* 视频加载失败时显示静态图片 */
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ 
          backgroundImage: `url('https://images.pexels.com/photos/2750339/pexels-photo-2750339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` 
        }}></div>
      )}

      {/* 渐变遮罩 - 确保文字可读性 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-purple-900/60" />

      {/* 噪点纹理 */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJnoiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjY1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2cpIiBvcGFjaXR5PSIwLjAzIi8+PC9zdmc+')] opacity-30" />

      {/* 只有在视频播放时显示音量控制按钮 */}
      {!videoError && (
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-8 right-8 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
          aria-label={isMuted ? '开启音量' : '关闭音量'}
        >
          {isMuted ? '🔇' : '🔊'}
        </button>
      )}
    </div>
  );
};

export default HeroBackground;