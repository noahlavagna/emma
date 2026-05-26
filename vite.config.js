import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Chemins d'assets relatifs → le site marche à n'importe quelle URL
  // (racine, sous-dossier /nom-du-repo/, ou domaine personnalisé).
  base: './',
  plugins: [react()],
})
