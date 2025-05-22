import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { viteStaticCopy } from 'vite-plugin-static-copy';
import fs from 'fs';


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: true,
    port: 8080,
    allowedHosts: [
      'localhost',
      '*.ngrok-free.app',
      '*.ngrok.io'
    ]
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        
        {
          src: 'index.html',
          dest: 'ar',
          rename: 'index.html'
        },
        {
          src: 'index.html',
          dest: 'en',
          rename: 'index.html',
          transform: (content) => {
            return content
              .toString()
              .replace('lang="ar" dir="rtl"', 'lang="en" dir="ltr"');
          }
        }
      ]
    }),
    {
      name: 'generate-200-html',
      closeBundle: () => {
        if (fs.existsSync('dist/index.html')) {
          // نسخ ملف index.html إلى 200.html لدعم التوجيه على Vercel
          fs.copyFileSync('dist/index.html', 'dist/200.html');
          console.log('Created 200.html for better SPA routing');
        }
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
