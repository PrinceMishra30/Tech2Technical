import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "./", // Specify the root directory if it's not the current directory
  build: {
    outDir: "dist", // Specify the output directory for the production build
    rollupOptions: {
      input: "./src/main.jsx", // Specify the entry point for your React application
    },
  },
});
