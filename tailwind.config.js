module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mainColor: '#609966',
      },
      keyframes: {
        animate:{
          '0%,10%,100%':{
            width:'0%'
          },
          '70%,80%,90%':{
          width:'100%'
        }
        }
      },
      
    },
    animation: {
        animate:'animate 6s linear infinite'
      }
  },
  variants: {
    extend: {
     
    },
  },
  plugins: [],
}