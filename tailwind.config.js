/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'iee-blue': '#0d6efd',
        'iee-dark': '#052c6b',
        'surface': '#eef1f6',
        'muted': '#6c757d',
      },
      fontFamily: {
        'poppins': ['Poppins', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'main-bg': "linear-gradient(rgba(230,233,238,0.88), rgba(230,233,238,0.88)), url('/assets/1.png')",
      },
    },
  },
  plugins: [],
}