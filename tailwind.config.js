/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                iceberg: {
                    bg: '#FDFBF7',
                    yellow: '#ebf213',
                    text: '#111827',
                }
            },
            fontFamily: {
                sans: ['"DM Sans"', 'Inter', 'sans-serif'],
                'dm-sans': ['"DM Sans"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
