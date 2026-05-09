import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    base: '',
    root: './src',
    build: {
        outDir: '../dist',
    },
    publicDir: '../src/assets',
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(rootDir, 'src'),
            '@utils': path.resolve(rootDir, 'src/utils'),
            '@assets': path.resolve(rootDir, 'src/assets'),
        },
    },
    server: {
        open: true,
        port: 4000,
    }
})
