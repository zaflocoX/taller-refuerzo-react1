import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://zaflocoX.github.io/taller-refuerzo-react/",
  plugins: [react()],
})
