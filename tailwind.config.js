/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mulearn-trusty-blue': '#2E85FE',
        'mulearn-duke-purple': '#AF2EE6',
        'mulearn-greyish': '#c4c4c4',
        'mulearn-blackish': '#1a1a1a',
        'mulearn-whitish': '#fefefe',
        'mulearn-gray-600': '#666771',
      },
      fontFamily: {
        'sans': ['var(--font-sans)', 'system-ui', 'sans-serif'],
        'display': ['var(--font-display)', 'system-ui', 'sans-serif'],
        'retro': ['var(--font-retro)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'mulearn-trusty': 'linear-gradient(135deg, #2E85FE 0%, #AF2EE6 100%)',
      },
      animation: {
        'floatY': 'floatY 2s ease-in-out infinite',
        'rocks': 'rocks 10s ease-in-out infinite',
        'ufo-float': 'ufoFloat 10s ease-in-out infinite',
        'uh': 'floatY 2s ease-in-out infinite',
        'oh': 'floatY 2s ease-in-out 1s infinite',
        'in': 'floatY 2s ease-in-out infinite',
        'space': 'floatY 2s ease-in-out 0.2s infinite',
        'l': 'floatY 2s ease-in-out infinite',
        'o': 'floatY 2s ease-in-out 1s infinite',
        's': 'floatY 2s ease-in-out 0.7s infinite',
        't': 'floatY 2.5s ease-in-out 1.6s infinite',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(5%)' },
        },
        rocks: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-1.5%)' },
        },
        ufoFloat: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-10%)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
