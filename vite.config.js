import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@':path.resolve(__dirname + '/src'),
      'comp':path.resolve(__dirname + '/src/components'),
      'images':path.resolve(__dirname + '/src/assets/images'),
      'apis': path.resolve(__dirname + 'src/apis')
    }
  }
})
