import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(),
  ],
  resolve: {
    alias: {
      '~': '../src'
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    // setupFiles: [
    //   'test/setup.js'
    // ]
  }
})
