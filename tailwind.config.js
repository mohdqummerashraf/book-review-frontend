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
      extend: {
        colors: {
          background: "#ffffff", // Light mode solid white
          foreground: "#000000",
          darkBackground: "#121212", // Dark mode solid black
        },
        backgroundImage: {
          "custom-gradient": "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,232,198,1) 35%, rgba(0,212,255,1) 100%)",
       },
      },
    },
    plugins: [],
  };
  