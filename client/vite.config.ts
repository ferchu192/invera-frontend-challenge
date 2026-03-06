import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/invera-frontend-challenge/',
  server: {
    host: '0.0.0.0',  // Escucha en todas las interfaces
    port: 5176,
    allowedHosts: ['.ngrok-free.app'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'mui-core': ['@mui/material', '@mui/system', '@emotion/react', '@emotion/styled'],
          'mui-datatables': ['mui-datatables'],
        },
      },
    },
  },
})
