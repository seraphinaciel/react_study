import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { viteSSR } from 'vite-plugin-ssr/server';
import { createServer } from 'vite-plugin-ssr/plugin';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // 192.168.0.194
    port: 5000,
    // open: true,
  },
  // plugins: [react()],
  plugins: [react(), createServer()],
});
