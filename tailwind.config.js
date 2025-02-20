// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        abhayaLibre: ["Abhaya Libre", "serif"],
        arimo: ["Arimo", "sans-serif"],
        berlinSans: ["Berlin Sans FB Demi", "sans-serif"],
        msUIGothic: ["MS UI Gothic", "serif"],
        ptsans: ["PT Sans Caption", "sans-serif"],
        freeman: ["Freeman", "sans-serif"],
        konkhmer: ["Konkhmer Sleokchher", "serif"],
        crimsontext: ["Crimson Text", "serif"],
        inter: ["Inter", "serif"],
        afacad: ["Afacad", "serif"],
        worksans: ['"work-sans"', "sans-serif"],
        publicsans: ['"Public Sans"', "serif"],
      },
      fontSize: {
        xs: "12px",
        s: "14px",
        m: "16px",
        l: "18px",
        xl: "20px",
        xxl: "24px",
        xxxl: "32px",
        xxxxl: "40px",
        xxxxxl: "48px",
        largeHeading: "60px",
      },
      colors: {
        brown: "#8A6D59",
        logoclr: "#252B42",
        gray: "#737373",
        secondary: "#F5E8DF", // Custom gray color
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(250.46deg, rgba(125, 93, 72, 0.37) 17.73%, rgba(227, 169, 131, 0.37) 63.1%)",
      },
    },
  },
  plugins: [],
};
