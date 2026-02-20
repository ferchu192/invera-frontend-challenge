import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fernando-gimenez/responsive-challenge/',
  server: {
    allowedHosts: ['.ngrok-free.app'],
  },
})
