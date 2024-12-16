import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue({
    template: {
        compilerOptions: {
          // treat all tags with a "ui5-" prefix as custom elements
          isCustomElement: tag => tag.startsWith('ui5-')
        }
      }
  })],
  resolve: {
    alias: {
      // Ensure Vite knows to resolve `thirdparty/preact` correctly.
      '../thirdparty/preact/preact.module.js': '/node_modules/@ui5/webcomponents-base/dist/thirdparty/preact/preact.module.js',
      '../thirdparty/preact/jsxRuntime.module.js': '/node_modules/@ui5/webcomponents-base/dist/thirdparty/preact/jsxRuntime.module.js',
    },
  },
  base: process.env.NODE_ENV === 'production' ? '/ui5-webcomponents-sample-vue' : '/',
  build: {
    rollupOptions: {
      output: {
        format: 'esm',
      },
    },
  },
});
