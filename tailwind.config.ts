import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class',
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'tokyogreen': '#9ece6a',
                'blue': '#89b4fa',
                'mocha_red': '#f38ba8',
                'crust': '#16161e',
                'mocha_lavender': '#b4befe',
                'mocha_yellow': '#f9e2af',
                'crustlight': '#dce0e8',
                'base': '#1a1b26',
                'baselight': '#eff1f5',
                'mocha_text': '#cdd6f4',
                'mocha_subtext': '#bac2de',
                'latte_yellow': '#df8e1d',
                'latte_text': '#4c4f69',
                'latte_subtext': '#5c5f77',
            },
        },
    },
    plugins: [],
};
export default config;
