/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "space-dark": "hsl(230,35,7)",
        purply: "hsl(231,77,90)",
        "lighter-black": "hsl(231, 10, 45)",
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        "barlow-con": ["Barlow Condensed", "serif"],
      },
      backgroundImage: {
        "home-mobile": "url('/src/assets/home/background-home-mobile.jpg')",
        "crew-mobile": "url('/src/assets/crew/background-crew-mobile.jpg')",
        "destination-mobile":
          "url('/src/assets/destination/background-destination-mobile.jpg')",
        "technology-mobile":
          "url('/src/assets/technology/background-technology-mobile.jpg')",
        "home-tablet": "url('/src/assets/home/background-home-tablet.jpg')",
        "crew-tablet": "url('/src/assets/crew/background-crew-tablet.jpg')",
        "destination-tablet":
          "url('/src/assets/destination/background-destination-tablet.jpg')",
        "technology-tablet":
          "url('/src/assets/technology/background-technology-tablet.jpg')",
        "home-desktop": "url('/src/assets/home/background-home-desktop.jpg')",
        "crew-desktop": "url('/src/assets/crew/background-crew-desktop.jpg')",
        "destination-desktop":
          "url('/src/assets/destination/background-destination-desktop.jpg')",
        "technology-desktop":
          "url('/src/assets/technology/background-technology-desktop.jpg')",
      },
      transitionProperty: {
        right: "right",
        size: "height, width",
      },
      screens: {
        lg: "1220px",
      },
    },
  },
  plugins: [],
};
