import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    server: {
        host: true,
        hmr: {
            host: 'localhost',
        },
    },
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.jsx',
                'resources/css/nonono/style.css',
                'resources/js/pages/WebSite1.jsx',
                'resources/js/WebSite1.jsx',
                'resources/js/reactflow/edit.jsx',
            ],
            refresh: true,
        }),
    ],
});
