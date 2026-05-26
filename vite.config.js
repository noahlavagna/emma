import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Sous-dossier du dépôt GitHub Pages (https://noahlavagna.github.io/emma/).
  // Si tu renommes le dépôt ou ajoutes un domaine perso, ajuste cette valeur ('/').
  base: '/emma/',
  plugins: [react()],
})
