import type { Config } from "tailwindcss";

export default {
  applyBaseStyles: false,
  nesting: true,
  content: ["./index.html", "src/**/*.{js,jsx,svelte,ts,tsx}"],
  plugins: [],
  theme: {
    extend: {},
  },
} satisfies Config;
