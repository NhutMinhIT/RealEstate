/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    clipPath: {
      mypolygon: "polygon(50% 0,95% 25%,95% 75%,50% 100%,5% 75%,5% 25%)",
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwind-clip-path")],
};
