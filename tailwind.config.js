/** @type {import('tailwindcss').Config} */
import { range } from 'lodash';

const pxToRem = (px, base = 16) => `${px / base}rem`;

const pxToRemFunc = (start, end) =>
  range(start, end).reduce((acc, px) => {
    acc[`${px}pxr`] = pxToRem(px);
    return acc;
  }, {});

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      spacing: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      inset: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      fontSize: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      lineHeight: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      colors: {
        primary: 'rgba(102, 98, 201, 1)',
        secondary: 'rgba(124, 120, 224, 1)',
        tertiary: 'rgba(210, 202, 250, 1)',
        negative: 'rgba(225, 25, 0, 1)',
        contentPrimary: 'rgba(32, 33, 35, 1)',
        contentSecondary: 'rgba(109, 112, 126, 1)',
        contentTertiary: 'rgba(157, 161, 180, 1)',
      },
      boxShadow: {
        navShadow: '0px -2px 4px 0px rgba(0,0,0,0.1)',
        meetUp: '0px 2px 20px 0px rgba(0,0,0,0.15)',
      },
      screens: {
        mobile: '360px',
        desktop: '1080px',
      },
      fontFamily: {
        suit: ['SUIT', 'noto-sans-kr', 'sans-serif'],
      },
      backgroundImage: {
        customBg: 'linear-gradient(180deg, #D0CEFF 0%, #FDFDFF 50%, #FFF 100%)',
      },
    },
  },
  plugins: [],
};
