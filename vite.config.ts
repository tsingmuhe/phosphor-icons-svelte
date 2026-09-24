import {svelte} from '@sveltejs/vite-plugin-svelte'
import {svelteTesting} from '@testing-library/svelte/vite'
import {defineConfig} from 'vitest/config'

export default defineConfig({
    plugins: [
        svelte({
            compilerOptions: {hmr: false},
        }),
        svelteTesting()
    ],
    test: {
        environment: 'jsdom',
        setupFiles: ['./test/setup.ts'],
        include: ['test/**/*.test.ts'],
        alias: {
            svelte: 'svelte',
        },
    },
})
