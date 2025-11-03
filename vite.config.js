import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // 🎯 LÍNEA CLAVE A AGREGAR 🎯
  // Debes usar el nombre EXACTO de tu repositorio de GitHub como ruta base
  base: "/ecommerce-react-curso/", 
  
})