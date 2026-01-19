// 复制静态文件到dist目录的脚本
import fs from 'fs';
import path from 'path';

// 需要复制的文件列表
const filesToCopy = [
  'CNAME',
  'sitemap.xml',
  'robots.txt'
];

// 目标目录
const distDir = './dist';

// 确保dist目录存在
if (!fs.existsSync(distDir)) {
  console.error('dist目录不存在，请先运行build命令');
  process.exit(1);
}

// 复制每个文件
filesToCopy.forEach(file => {
  try {
    const sourcePath = path.resolve(file);
    const destPath = path.resolve(distDir, file);
    
    // 检查源文件是否存在
    if (!fs.existsSync(sourcePath)) {
      console.warn(`文件 ${file} 不存在，跳过复制`);
      return;
    }
    
    // 复制文件
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✓ 已复制 ${file} 到 ${distDir}`);
  } catch (error) {
    console.error(`✗ 复制 ${file} 失败:`, error.message);
  }
});

console.log('\n所有静态文件复制完成！');
