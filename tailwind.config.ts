import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0078ff",
          secondary: "#00bf00",
          accent: "#009500",
          neutral: "#141414",
          "base-100": "#fff6ff",
          info: "#0064f6",
          success: "#a6d935",
          warning: "#d32400",
          error: "#ff999f",
          body: {
            "background-color": "#e3e6e6", // Dark Theme
          },
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
