// vite.config.ts
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // Puedes especificar la raíz de tus archivos fuente (ej. src)
  root: path.resolve(__dirname, './'),
  build: {
    // Directorio de salida para la construcción
    outDir: path.resolve(__dirname, 'dist'),
    // Para entornos Laravel/PHP, es útil que Vite copie los archivos directamente a public/build
    // En este caso, querrías cambiar 'dist' a 'public/build' o similar.
    // entry: path.resolve(__dirname, 'src/main.ts'), // Si tienes un punto de entrada principal
  },
  server: {
    // Puerto de desarrollo de Vite
    port: 5173,
    // Abre el navegador automáticamente
    open: true,
  },
  resolve: {
    alias: {
      // Alias para importar archivos con @/
      '@': path.resolve(__dirname, 'src'),
      // Alias para Bootstrap (útil si importas Sass)
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  plugins: [
    // Aquí puedes añadir plugins si los necesitas para frameworks específicos (ej. React, Vue)
  ],
});