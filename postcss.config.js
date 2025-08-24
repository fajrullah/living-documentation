// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},  // Turbopack needs this, not 'tailwindcss'
    autoprefixer: {},
  },
};
