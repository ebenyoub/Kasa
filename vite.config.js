import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compressionPlugin from 'vite-plugin-compression';

export default defineConfig({
    plugins: [
        react(),
        compressionPlugin({
            ext: '.gz', // extension pour les fichiers compressés
            algorithm: 'gzip', // algorithme de compression
            deleteOriginFile: false, // supprime le fichier original après compression
            verbose: true // affiche des informations détaillées lors de la compression
          })
    ], 
});