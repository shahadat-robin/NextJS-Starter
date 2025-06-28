import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/tw-elements-react/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff4733',
          light: '#ffada2',
          lighter: '#ffc6bf',
        },

        white: {
          DEFAULT: '#EEEEEE',
          deep: '#ffffff',
          light: '#edf6f9',
        },

        dark: {
          DEFAULT: '#26282B',
          deep: '#1e1e1e',
          light: '#363B4E',
        },

        gray: {
          DEFAULT: '#555555',
          deep: '#404040',
          light: '#999999',
        },
      },
      fontFamily: {
        heading: ['"Averia Serif Libre"', 'serif'],
        body: ['"Roboto Slab"', 'Roboto', 'serif'],
      },
      container: {
        center: true,
        screens: {
          sm: '100%',
          '2xl': '1280px',
        },
      },
    },
  },
  plugins: [require('tw-elements-react/dist/plugin.cjs')],
};
export default config;
