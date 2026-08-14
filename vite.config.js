import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? '/',
  css: {
    preprocessorOptions: {
      scss: {
        // needed so @use "libs/..." resolves from the scss root in any subdirectory
        loadPaths: ['src/assets/scss'],
      },
    },
  },
})
