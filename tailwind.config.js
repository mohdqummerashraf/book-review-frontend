/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", 
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",  // ✅ App Router
      "./pages/**/*.{js,ts,jsx,tsx}", // ✅ Pages Router
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}" // ✅ Include `src` if used
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  