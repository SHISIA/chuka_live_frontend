import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        goldenYellow: '#F2BB47',
        textThemeBrown:"#653A3A",
        chukaLiveLight:"#f5f5f5",
        chukaLiveBlack:"#334155"
      },
    },
  },
  plugins: [],
};
export default config;
