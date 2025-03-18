import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: './', // Explicit root directory
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})