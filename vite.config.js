import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import postcss from '@vituum/vite-plugin-postcss'; // Importez le plugin PostCSS
import autoprefixer from 'autoprefixer'; // Importez Autoprefixer

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    postcss({
      // Placez ici les options de PostCSS, y compris Autoprefixer
      postcssOptions: {
        plugins: [
          autoprefixer() // Utilisez directement Autoprefixer
        ]
      }
    })
  ],
});
