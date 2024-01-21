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
      mypolygon: "polygon(0 25%, 50% 0, 100% 25%,100% 75%,50% 100%, 0 75%)",
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwind-clip-path")],
};
