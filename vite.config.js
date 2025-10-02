import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // If deploying to GitHub Pages under a repository named "sewanti-lahiri"
  // and not using a custom domain, uncomment the line below before building:
  base: '/Sewanti-Lahiri',
})
