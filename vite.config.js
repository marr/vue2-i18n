const { createVuePlugin } = require('vite-plugin-vue2');

module.exports = {
  plugins: [createVuePlugin()],
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
};
