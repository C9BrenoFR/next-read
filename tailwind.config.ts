import { Cinzel } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "login-background": "url('/img/login-background.jpg')",         
      },
      colors: {
        customWhite :{
          DEFAULT: '#f0f0f2',
          variant1 : '#f2f2f2',
          variant2 : '#f5f2dc',
        },
        customBlack :{
          DEFAULT: '#011826',
        },
        customBlue :{
          light: '#4a6f82',
          DEFAULT: '#366273',
          dark: '#2b4a5f',
          darker: '#1f2f3a',
        },
        customAquaGreen :{
          DEFAULT: '#00585e',
          variant1 : '#009494',
        },
      },
      boxShadow: { 
        'image-shadow': '5px 5px 20px #2e2e2e',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'sans-serif'],
        courier : ['Courier Prime', 'monospace'],
      },
    },
  },
  plugins: [
   
  ],
};
export default config;
