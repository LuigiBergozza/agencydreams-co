// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    // Altere o 'base' para './' (caminho relativo)
    // Se o seu repositório for <username>.github.io
    base: './', 
    plugins: [react(), tailwindcss()],
})