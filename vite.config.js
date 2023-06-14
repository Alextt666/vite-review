import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock';
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),viteMockServe({mockPath:'./mock',enable:true})],
  resolve:{
    alias:{
      '@':path.resolve(__dirname + '/src'),
      'comp':path.resolve(__dirname + '/src/components'),
      'images':path.resolve(__dirname + '/src/assets/images'),
      'apis': path.resolve(__dirname + '/src/apis'),
      'styles': path.resolve(__dirname + '/src/styles'),
      'plugin': path.resolve(__dirname + '/src/plugin'),
    }
  }
})
