import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fluctuate: "fluctuate 3s ease-in-out infinite",
      },
      keyframes: {
        fluctuate: {
          "0% , 100%": {
            transform: "translateX(0) scale(1)",
          },
          "50%": {
            transform: "translateX(-42px) scale(1.1)",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        pattern: "url('/pattern.png')",
        "hero-bg": "url('/hero-bg.png')",
        "auth-bg": "url('/pattern.png')",
        "on-sale--bg": "url('/about1.webp')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
