/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    keyframes: {
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
    },
    animation: {
      fadeIn: "fadeIn 3s ease-in-out forwards",
    },
  },
};
export const plugins = [];
