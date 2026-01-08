import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
    // 加载环境变量文件
    const env = loadEnv(mode, process.cwd(), '');
    
    // 关键修复：
    // 1. 优先读取 Netlify 系统环境变量 (process.env)
    // 2. 其次读取 Vite 标准的 VITE_ 前缀变量
    // 3. 最后读取本地 .env 文件
    const apiKey = process.env.GEMINI_API_KEY || env.GEMINI_API_KEY || env.VITE_GEMINI_API_KEY;

    return {
      // 核心修复：Netlify 部署必须使用根路径 '/'，否则会导致图片和脚本加载失败
      base: '/', 
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        // 确保 Key 正确注入，解决 AI 无法解读的问题
        'process.env.API_KEY': JSON.stringify(apiKey),
        'process.env.GEMINI_API_KEY': JSON.stringify(apiKey)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
