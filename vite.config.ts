import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
    // 加载 .env 文件
    const env = loadEnv(mode, process.cwd(), '');
    
    // 关键修复：
    // 在本地开发时，key 来自 .env 文件 (env.GEMINI_API_KEY)
    // 在 Netlify/Vercel 构建时，key 来自系统环境变量 (process.env.GEMINI_API_KEY)
    // 我们需要优先读取系统环境变量，确保构建时能拿到 Key
    const apiKey = process.env.GEMINI_API_KEY || env.GEMINI_API_KEY;

    return {
      // 部署到根路径
      base: '/', 
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        // 将获取到的 key 注入到前端代码中
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