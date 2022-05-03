module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundSize: {
      100: "100% 100%",
      110: "110% 110%",
    },
    extend: {
      colors: {
        primary: "rgb(250, 193, 70)",
        mainBg: "#1d1d1d",
        secondary: " #fd2155",
        faintText: "rgba(255,255,255,0.04)",
        normalText: " rgb(235, 235, 235)",
      },
    },
  },
  plugins: [],
};
