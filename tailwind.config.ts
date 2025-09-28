import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        fill: {
          1: "rgba(255, 255, 255, 0.10)",
        },
        text: {
          50: '#090b11',
          100: '#111622',
          200: '#232c43',
          300: '#344365',
          400: '#455987',
          500: '#576fa8',
          600: '#788cba',
          700: '#9aa9cb',
          800: '#bcc5dc',
          900: '#dde2ee',
          950: '#eef1f6',
        },
        background: {
          50: '#0d0d0d',
          100: '#1a1a1a',
          200: '#333333',
          300: '#4d4d4d',
          400: '#666666',
          500: '#808080',
          600: '#999999',
          700: '#b3b3b3',
          800: '#cccccc',
          900: '#e6e6e6',
          950: '#f2f2f2',
        },
        primary: {
          50: '#020917',
          100: '#04122f',
          200: '#09235d',
          300: '#0d358c',
          400: '#1147bb',
          500: '#1659e9',
          600: '#447aee',
          700: '#739bf2',
          800: '#a2bcf6',
          900: '#d0defb',
          950: '#e8eefd',
        },
        secondary: {
          50: '#010819',
          100: '#011032',
          200: '#021f64',
          300: '#032f96',
          400: '#043fc8',
          500: '#054ffa',
          600: '#3772fb',
          700: '#6995fc',
          800: '#9bb8fd',
          900: '#cddcfe',
          950: '#e6edfe',
        },
        accent: {
          50: '#010819',
          100: '#011032',
          200: '#021f64',
          300: '#032f96',
          400: '#043fc8',
          500: '#054ffa',
          600: '#3772fb',
          700: '#6995fc',
          800: '#9bb8fd',
          900: '#cddcfe',
          950: '#e6edfe',
        },
        accentPrimary: "#1657e8",
        accentPrimaryHover: "#4d7fee",
        accentSecondary: "#021e5f",
        accentSecondaryHover: "#03319b",
        success: {
          25: "#F6FEF9",
          50: "#ECFDF3",
          100: "#D1FADF",
          600: "#039855",
          700: "#027A48",
          900: "#054F31",
        },
        pink: {
          25: "#FEF6FB",
          100: "#FCE7F6",
          500: "#EE46BC",
          600: "#DD2590",
          700: "#C11574",
          900: "#851651",
        },
        blue: {
          25: "#F5FAFF",
          100: "#D1E9FF",
          500: "#2E90FA",
          600: "#1570EF",
          700: "#175CD3",
          900: "#194185",
        },
        sky: {
          1: "#F3F9FF",
        },
        black: {
          1: "#00214F",
          2: "#344054",
        },
        gray: {
          25: "#FCFCFD",
          200: "#EAECF0",
          300: "#D0D5DD",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          900: "#101828",
        },
      },
      backgroundImage: {
        "bank-gradient": "linear-gradient(90deg, #1657e8 0%, #4893FF 100%)",
        "gradient-mesh": "url('/icons/gradient-mesh.svg')",
        "bank-green-gradient":
          "linear-gradient(90deg, #01797A 0%, #489399 100%)",
      },
      boxShadow: {
        form: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        chart:
          "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)",
        profile:
          "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
        creditCard: "8px 10px 16px 0px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        "ibm-plex-serif": "var(--font-ibm-plex-serif)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
