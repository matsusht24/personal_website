import type { Config } from "tailwindcss";

export default {
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
        sun: {
          100: "#FFF5CF",
          200: "#FDD331",
        },
        sky: {
          100: "#aeeafc ",
          200: "#5995B7 ",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
