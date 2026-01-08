import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
    // 加载 .env 文件
    const env = loadEnv(mode, process.cwd(), '');
    
    // 优先读取 Netlify/Vercel 的 VITE_ 前缀变量，以及标准环境变量
    const apiKey = process.env.GEMINI_API_KEY || 
                   process.env.API_KEY || 
                   process.env.VITE_GEMINI_API_KEY || 
                   env.GEMINI_API_KEY || 
                   env.API_KEY || 
                   env.VITE_GEMINI_API_KEY;

    return {
      base: '/', 
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        // 注入 API KEY 到前端代码，统一使用 process.env.API_KEY 访问
        'process.env.API_KEY': JSON.stringify(apiKey),
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      // 优化依赖预构建，强制包含 MediaPipe，解决导入报错
      optimizeDeps: {
        include: ['@mediapipe/camera_utils', '@mediapipe/hands']
      }
    };
});