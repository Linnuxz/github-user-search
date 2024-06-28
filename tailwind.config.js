/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'custom-gray': '#4B6A9B',
                'dark-theme': '#1E2A47',
            },
            boxShadow: {
                'light-theme': '0px 16px 30px -10px rgba(70, 96, 187, 0.20)',
            },
            caretColor: {
                blue: '#0079FF',
            },
        },
    },
    plugins: [],
};
