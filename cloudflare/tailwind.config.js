module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"]
      },
      colors: {
        dark: {
          DEFAULT: "#18181b",
          900: "#09090b",
          800: "#18181b",
          700: "#27272a"
        },
        accent: {
          DEFAULT: "#7dd3fc"
        }
      },
      boxShadow: {
        'soft': '0 4px 32px 0 rgba(0,0,0,0.20)'
      },
      backgroundImage: {
        'animated-gradient': 'linear-gradient(270deg, #6366f1, #7dd3fc, #a5b4fc, #38bdf8)'
      }
    },
  },
  plugins: [],
}
