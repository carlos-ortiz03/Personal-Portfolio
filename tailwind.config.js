/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    // fontSize: {
    //   xLems: "12em"
    // },
    colors: {
      "navColor": "#1ca6a6",
      "white": "#fff",
      "black": "#000",
      "newBackground": "#ace1fb",
      "borderColor": "#6ba8a8",
      "backgroundImageColor": "#6ba8a8",
      "potentialBackground": "#b5d9d7",
      "potentialBackground2": "#f2c9be"
    },
    extend: {
      screens:{
        "xxxsm": "200px",
        "xxsm": "350px",
        "xsm": "500px",
        "lg": "950px",
        "xlg": "1200px",
        "xxlg": "1500px",
        "xxxl": "1670px"
      },
      fontFamily: {
        "Secular": ["Secular One", "sans-serif"]
      },
      spacing: {
        "navSpacing": "5vh",
        "introBodySpacing": "95vh",
        "breakSpacing": "100vh",
        "projectSpacing": "50vh",
        "skillsWallSpacing": "150vh"
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in forwards",
        fadeIn2: "fadeIn 3s ease-in forwards",
        submit: "submit 1.5s ease-in forwards",
        homeTransition1: "homeTransition1 1.5s ease-in forwards",
        navbarTransition: "navbarTransition .5s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        submit:{
          "0%": {colors: "#000"},
          "100%": {colors: "#1ca6a6"}
        },
        homeTransition1: {
          "0%": {transition: "rotate-180"},
          "100%": {transition: "rotate-360"}
        },
        navbarTransition: {
          "0%": {transform: "translateX(100%)"},
          "100%": {transform: "translateX(0%)"}
        }
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay")
  ],
}
