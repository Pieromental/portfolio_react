/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        flashWhite: "#f4f4f6",
        platinum: "#e6e6e9",
        platinumLight: "#f4f4f5",
        timberWolf: "#d4d4d8",
        taupe: "#9999a1",
        silver: "#d6d6d6",
        dim: "#66666e",
        battleGray: "#858585",
        french: "#b5b5ba",
        night: "#141414",
        jet: "#292929",
        jetLight: "#333333",
        jetGray: "#6d6d74",
        richBlack: "#2e2e2e",
        eerieBlack: "#1f1f1f",
        blue_1: "#003785",
        blue_2: "#1465bb",
        blue_3: "#2196f3",
        blue_4: "#81c9fa",
        blue_5: "#b9ffff",
        onyx: "#5b5b5b",
      },
      boxShadow: {
        card: "10px 10px 21px 0px rgba(0,0,0,0.43)",
        cardLight: "0px 19px 38px #eaeaec, 0px 15px 12px #eaeaec",
      },
      screens: {
        xs: "450px",
        sm: "640px",
        md: "768px",
        xmd: "900px",
        lg: "1025px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1800px",
      },
      backgroundImage: {
        about:
          "linear-gradient(165deg, rgba(244,244,246,1) 100%, rgba(122,122,122,1) 100%)",
        experience:
          "linear-gradient(135deg, rgba(20,101,187,0.66) 60%, rgba(10,10,10,0.2) 100%),url('/src/assets/backgrounds/white-abstract.png')",
        experienceLight:
          "linear-gradient(137deg, rgba(185,255,255,0.55) 60%, rgba(33,150,243,0.5159313725490196) 61%)",
        hero: "linear-gradient(135deg, rgba(33,150,243,0.9) 0%, rgba(129,201,250,0.8) 60%, rgba(219,255,255,0.6) 60%)",
        "hero-mobile":
          "linear-gradient(137deg, rgba(33,150,243,0.9) 0%, rgba(129,201,250,0.7) 60%, rgba(219,255,255,0.5) 60%)",
        tech: "linear-gradient(166deg, rgba(185,255,255,0.7) 0%, rgba(129,201,250,0.7) 75%), url('/src/assets/backgrounds/graduation.jpg')",
      },
      fontFamily: {
        arenq: ["Arenq"],
        beckman: ["Beckman"],
        mova: ["Mova"],
        overcameBold: ["Overcame Bold"],
        overcameOutline: ["Overcame Outline"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
