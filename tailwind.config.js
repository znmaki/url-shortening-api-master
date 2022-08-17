
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gray-custze':'#bfbfbf',
        'grayish-violet':'#9e9aa7',
        'grayish-custze':'#F0F1F6',
        'very-dark-blue':'#35323e',
        'very-dark-violet':'#232127',
        'violet-custze':'#3b3054',
        'cyan':'#2acfcf',
      },
      backgroundImage:{
        'icon-brand-recognition':"url('./public/static/images/icon-brand-recognition.svg')"
      }
    },
  },
  plugins: [],
}
