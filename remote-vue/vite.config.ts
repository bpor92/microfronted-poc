import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'vueHost',
      remotes: {
        vueRemote: 'http://localhost:5001/assets/remoteEntry.js', // Ścieżka do aplikacji Vue
      },
      shared: ['vue'],
    }),
  ],
})
