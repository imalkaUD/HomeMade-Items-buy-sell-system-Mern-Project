const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}', // Correct path to Material Tailwind components
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}', // Correct path to Material Tailwind theme components
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1565D8',
        secondary: '#111827',
        accent: '#1F2937',
        neutral: '#374151',
        'base-100': '#FFFFFF',
        dark: {
          hard: '#002436',
          soft: '#183B56'
        }
      },
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        lora: ['Lora', 'serif']
      }
    }
  },
  plugins: [require('@tailwindcss/forms')],
});
