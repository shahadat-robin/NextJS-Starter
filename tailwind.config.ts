import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#93CF95',
        secondary: '#DBEFDC',
        dark: '#102940',
        'light-dark': '#1A456B',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
export default config;
