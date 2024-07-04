import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sintony", ...defaultTheme.fontFamily.sans],
        serif: ["Gentium Plus", ...defaultTheme.fontFamily.serif],
        mono: ["Spline Sans Mono Variable"],
      },
      animation: {
        typewriter: 'typewriter 2s steps(18) forwards',
        caret: 'typewriter 2s steps(18) forwards, blink 1s steps(18)',
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
      colors:
      { 'flush-orange': {
        '50': '#fffaec',
        '100': '#fff5d3',
        '200': '#ffe7a5',
        '300': '#ffd56d',
        '400': '#ffb732',
        '500': '#ff9e0a',
        '600': '#ff8600',
        '700': '#cc6202',
        '800': '#a14b0b',
        '900': '#82400c',
        '950': '#461e04',
    },
    }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
