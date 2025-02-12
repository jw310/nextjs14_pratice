const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        // sm: '375px',
        // md: '768px',
        // lg: '992px',
        // xl: '1440px',
      },
      colors: {
        'primary-blue': {
          500: '#205EA4',
          400: '#4E7BB3',
          300: '#7B9CC7',
          200: '#A7BCD9',
          100: '#D2DDEC',
        },
        'primary-yellow': {
          500: '#DDA923',
          400: '#DBB766',
          300: '#E3CBB9',
          200: '#EBDAB0',
          100: '#F4EAD5',
        },
        'secondary-red': {
          500: '#CB3023',
          400: '#E14537',
          300: '#F19C96',
          200: '#FAE1DF',
          100: '#FBF0EF',
        },
        'secondary-yellow': {
          500: '#CF6613',
          400: '#EB8A18',
          300: '#F2A92B',
          200: '#F5D886',
          100: '#FAEBC3',
        },
        'secondary-green': {
          500: '#0E9053',
          400: '#24AC67',
          300: '#53B77A',
          200: '#A8D5B5',
          100: '#CDE6D4',
          text: '#097646',
        },
        grey: {
          900: '#0E1727',
          800: '#1B2839',
          700: '#323F52',
          600: '#465465',
          500: '#656E80',
          400: '#949EAE',
          300: '#CED2DA',
          200: '#E8E9ED',
          100: '#EFF2F5',
          50: '#F7F9FA',
          25: '#FBFBFC',
        },
      },
      fontFamily: {
        sans: ['var(--font-notoSans)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      height: {
        'screen-minus': 'calc(100vh - 284px)',
      },
      minHeight: {
        'screen-minus': 'calc(100vh - 284px)',
      },
      boxShadow: {
        custom: '0 8px 8px 0 rgba(0, 0, 0, 0.35)',
      },
      flex: {
        3: '3 3 0%',
      },
      //這邊是我們的animation命名
      animation: {
        point: 'point 0.6s linear infinite',
        shake: 'shake 0.3s linear 1',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        textShimmer: 'textShimmer 2.5s ease-out infinite',
        spin: 'spin 2s linear infinite',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out forwards',
        surround: 'surround 2s linear infinite',
      },
      keyframes: {
        // 往右上指
        point: {
          '0%': { top: '-0.25rem', left: '-1.25rem' },
          '100%': { top: '-0.5rem', left: '-1.5rem' },
        },
        // 震動
        shake: {
          '0%': { transform: 'translateX(-5%)' },
          '25%': { transform: 'translateX(5%)' },
          '50%': { transform: 'translateX(-5%)' },
          '75%': { transform: 'translateX(5%)' },
          '100%': { transform: 'translateX(-5%)' },
        },
        pulse: {
          '50%': { opacity: 0.5 },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        ping: {
          '75%,100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
        textShimmer: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
        spin: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        fadeIn: {
          from: { opacity: 0, transform: 'translateX(-1000%)' },
          to: { opacity: 1, transform: 'translateX(0%)' },
        },
        fadeOut: {
          from: { opacity: 0, transform: 'translateX(0%)' },
          to: { opacity: 1, transform: 'translateX(1000%)' },
        },
        surround: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  // 新增前缀 variants
  variants: {
    extend: {
      // animate 可以用在 hover，e.g. hover:animate-xxxx
      animation: ['hover'],
    },
  },
  plugins: [],
};
