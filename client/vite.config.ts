import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fernando-gimenez/responsive-challenge/',
  server: {
    allowedHosts: ['b495-186-137-108-179.ngrok-free.app'],
  },
})
