import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // 192.168.0.194
    port: 5000,
    // open: true,
  },
  plugins: [react()],
});
