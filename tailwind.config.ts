import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: {
          200: "#292929",
          400: "#1B1B1B",
          600: "#121212",
          800: "#0D0D0D",
        },
        w: "#FFFFFF",
        g: "#7E7F81",
        r: "#FF2900",
      },
    },
  },
  plugins: [],
};
export default config;
