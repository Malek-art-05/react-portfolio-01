import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/lucide-react')) return 'icons'
          if (id.includes('node_modules/three')) return 'three'
          if (id.includes('node_modules/react')) return 'vendor'
        }
      }
    }
  },
  preview: {
    port: 3000,
    open: true,
  }
})
