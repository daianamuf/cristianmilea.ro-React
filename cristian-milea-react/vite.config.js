import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.produciton.VITE_BASE_URL,
  plugins: [react()],
});
