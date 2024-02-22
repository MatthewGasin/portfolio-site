import type { Config } from 'tailwindcss';

const fontFamily = {
  roboto: ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'Arial', 'sans-serif'],
};

const boxShadow = {
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  blue: '0 5px 40px 0 rgba(8, 52, 152, .2)',
  blueHover: '0 10px 60px 0 rgba(8, 52, 152, .4)',
  red: '0 5px 40px 0 rgba(168, 8, 8, .2)',
  redHover: '0 10px 60px 0 rgba(168, 8, 8, .4)',
  yellow: '0 5px 40px 0 rgba(220, 220, 60, .2)',
  yellowHover: '0 10px 60px 0 rgba(220, 220, 60, .4)',
};

const colors = {
  transparent: 'transparent',
  black: '#000000',
  white: '#ffffff',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  blue: {
    50: '#cedaf5',
    100: '#9eb6eb',
    200: '#6d91e0',
    300: '#3d6dd6',
    400: '#0c48cc',
    500: '#0a3aa3',
    600: '#072b7a',
    700: '#051d52',
    800: '#020e29',
  },
  yellow: {
    50: '#f8f8d8',
    100: '#f1f1b1',
    200: '#eaea8a',
    300: '#e3e363',
    400: '#dcdc3c',
    500: '#b0b030',
    600: '#848424',
    700: '#585818',
    800: '#2c2c0c',
  },
  red: {
    50: '#fdcdcd',
    100: '#fb9b9b',
    200: '#f86868',
    300: '#f63636',
    400: '#f40404',
    500: '#c30303',
    600: '#920202',
    700: '#620202',
    800: '#310101',
  },
};

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily,
    colors,
    boxShadow,
  },
  plugins: [],
};
export default config;
