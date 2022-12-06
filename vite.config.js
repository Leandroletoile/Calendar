import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      plugins: [
        dynamicImportVars()
      ]
    }
  }

})
