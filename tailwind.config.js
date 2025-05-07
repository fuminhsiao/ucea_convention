// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}", // ✅ shadcn 元件路徑
  ],
  theme: {
    extend: {},
  },
  safelist: [
    "bg-primary", "text-primary", "border-input", "bg-popover", "hover:bg-accent",
    "focus:ring-ring", "rounded-md", "px-4", "py-2",
  ],
  plugins: [],
};
