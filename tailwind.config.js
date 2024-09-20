/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#F5F5FB",
        gray: {
          dark: "#3B3B3B",
          1: "#626262",
          2: "#7C7C7C",
          3: "#C2C2C2",
          4: "#EBEBEB",
        },
        primary: {
          100: "#C9CEFF",
          300: "#8A94FF",
          500: "#5060ff",
          700: "#3944B5",
          900: "#22286B",
        },
        secondary: {
          100: "#B0B3D6",
          300: "#545CA6",
          500: "#000B7A",
          700: "#000857",
          900: "#000533",
        },
      },
    },
  },
  plugins: [],
};
