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
                    bg: '#FFFEF9',
                    primary: '#FF7A00', // Naranja más suave (Pastel/Coral)
                    secondary: '#0A192F',
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
