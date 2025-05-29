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
        sans: ["Mulish", ...defaultTheme.fontFamily.sans],
        serif: ["Iosevka Aile", ...defaultTheme.fontFamily.serif],
        mono: ["Spline Sans Mono Variable"],
      },
"animation": {
  "typewriter": "typewriter 2s steps(19) forwards",
  "caret": "typewriter 2s steps(19) forwards, blink 2s steps(19) forwards"
},
"keyframes": {
  "typewriter": {
    "to": {
      "left": "100%"
    }
  },
  "blink": {
    "0%": {
      "opacity": "1"
    },
    "94%": {
      "opacity": "1"
    },
    "95%": {
      "opacity": "1"
    },
    "100%": {
      "opacity": "0"
    }
  }
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
      'bg-light': '#eceff4',  // nord-6
        'bg-dark': '#2e3440',   // nord-0
        'text-light': '#2e3440', // nord-0
        'text-dark': '#eceff4',  // nord-6
        'color-accent': '#81a1c1', // nord-9
    },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
