import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from 'fs';

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
    {
      name: 'generate-200-html',
      closeBundle: () => {
        if (fs.existsSync('dist/index.html')) {
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