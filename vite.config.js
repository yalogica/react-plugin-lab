import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
    server: {
        port: 3030,
        open: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
    },
    plugins: [
        react()
    ]
});