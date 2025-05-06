module.exports = {
  content: [
    './src/**/*.{html,ts,css,scss}',  // Include HTML templates and TS files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E9571D',    // rgb(233 87 29) converted to hex
        secondary: '#14171A',
        accent: '#657786',
        background: '#F5F8FA',
        text: '#14171A',
      },
    },
  },
  plugins: [],
};
