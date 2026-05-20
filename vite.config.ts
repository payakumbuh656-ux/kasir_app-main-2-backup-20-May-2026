import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: './', // 🔥 WAJIB BIAR ELECTRON TIDAK BLANK

  plugins: [react(), tailwindcss()],

  build: {
    outDir: 'dist-react',
    emptyOutDir: true,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});