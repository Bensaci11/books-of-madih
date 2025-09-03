import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  // GitHub Pages يحتاج base يساوي اسم المستودع
  base: process.env.NODE_ENV === 'production'
    ? `/${process.env.VITE_REPO_NAME}/`
    : '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'كتب المدح',
        short_name: 'المدح',
        start_url: process.env.NODE_ENV === 'production'
          ? `/${process.env.VITE_REPO_NAME}/`
          : '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
