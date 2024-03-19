/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
      extend: {
          screens: {
              sms: "350px"
          },
          fontFamily: {
              graph: ["Graphic", "system-ui", "sans-serif"],
              roboto: ["Roboto", "system-ui", "sans-serif"],
              boing: ["Boing", "system-ui", "sans-serif"]
          },
          colors: {
              mediumpurple: "mediumpurple",
              dark: "#545454",
          }
      }
  },
  plugins: []
};
