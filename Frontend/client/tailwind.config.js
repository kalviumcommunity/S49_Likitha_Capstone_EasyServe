module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: { extend: {
    colors: { primary: '#000000' /* replace with Figma values */ },
    fontFamily: { serif: ['YourFigmaFont', 'serif'], sans: ['Inter','sans-serif'] }
  }},
  plugins: []
}
