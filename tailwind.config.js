/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#FF5580",
        secondaryColor: "#FFAA80",
        lightColor: "#FF0080",
      },
      borderColor: {
        primaryColor: "#FF5580",
        secondaryColor: "#FFAA80",
        lightColor: "#FF0080",
      },
      backgroundColor: {
        primaryColor: "#FF5580",
        secondaryColor: "#FFAA80",
        lightColor: "#FF0080",
      },
    },
  },
  plugins: [require("daisyui")],
};
