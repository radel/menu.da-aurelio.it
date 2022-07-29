import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    buildModules: [
        // pinia plugin - https://pinia.esm.dev
    ],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                }
            }
        },
    }
})
