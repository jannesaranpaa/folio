// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    integrations: [react()],

    i18n: {
        defaultLocale: "fi",
        locales: ["fi", "en"],
        routing: {
            prefixDefaultLocale: false,
        },
    },

    fonts: [
        {
            provider: fontProviders.google(),
            name: "Playfair Display",
            cssVariable: "--font-playfair",
            weights: [900],
            styles: ["normal"],
            fallbacks: ["serif"],
        },
        {
            provider: fontProviders.google(),
            name: "Rubik",
            cssVariable: "--font-rubik",
            weights: ["300 900"],
            styles: ["normal", "italic"],
            fallbacks: ["system-ui", "sans-serif"],
        },
    ],

    vite: {
        plugins: [tailwindcss()],
    },
});

