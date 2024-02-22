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
              darkBlue: "#1F2937 ",
              midwhite: "#F9FAF8 ",
              dimwhite: "#E5E7EB ",
              midBlue: "#3882F6 ",
              midDarkBlue: "#1F2937 ",

              mediumpurple: "mediumpurple",
              dark: "#222",
              
              prussianBlue: "#0d283d ",
              oxfordBlue: "#011931",
              greenPantone: "#3bb85d ",
              mediumSeagreen: "#58b872 ",
              honeydew: "#f1fef4 ",
              mintCream: "#F7FFFF ",
              cerulean: "15A0CF ",
              ceruleanlh: "#0BA4DC ",
              aliceBlue: "#EBF6FC "
          }
      }
  },
  plugins: []
};
