/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        dana: ["dana"]
      },
      colors: {
        primary: '#0076FB',
        secondary: '#FB8500',
        SecendryDark: '#BC6400',
        SecendryLight: "#FFA43D",
        third: "#404040",
        PrimaryDark: '#0059BC',
        SecendryLighter: '#FFD19E',
        // ...
      },
      backgroundImage: {
        'my_bg_image': "url('/picture/Noise Background.png')",
        'SupportOfChat': "url('/picture/Background & Noise.png')",
        'card': "url('/public/picture/Rectangle 17.png')",
        'footer': "url('/picture/Light Background Footer.png')",
      },
    },
  },
  plugins: [],
}
