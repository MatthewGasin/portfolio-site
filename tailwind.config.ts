import type { Config } from 'tailwindcss';

const fontFamily = {
  roboto: ['Roboto Mono', 'ui-sans-serif', 'system-ui', '-apple-system', 'Arial', 'sans-serif'],
  inconsolata: ['Inconsolata', 'ui-sans-serif', 'system-ui', '-apple-system', 'Arial', 'sans-serif'],
};

const boxShadow = {
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
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
  primary: {
    50: '#eee9f0',
    100: '#8E709F',
    300: '#582A72',
    500: '#2D0344',
    800: '#1C002C',
  },
  magenta: {
    50: '#f3eaef',
    100: '#dfc1d2',
    300: '#882D60',
    500: '#52002E',
    800: '#34001E',
  },
  sapphire: {
    50: '#ebeaf1',
    100: '#c0bad1',
    300: '#403075',
    500: '#160847',
    800: '#0B012D',
  },
  blue: {
    50: '#f7f9fb',
    100: '#eff4f8',
    200: '#d8e5ee',
    300: '#c9dae7',
    400: '#b2cbde',
    500: '#8ea2b1',
    600: '#6a7985',
    700: '#475158',
    800: '#23282c',
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
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily,
    colors,
    boxShadow,
    extend: {
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [],
};
export default config;
