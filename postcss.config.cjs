module.exports = {
  plugins: {
    // use the separate PostCSS plugin for Tailwind v4+
    "@tailwindcss/postcss": {},
    // autoprefixer for vendor prefixes
    autoprefixer: {},
  },
};
// module.exports = {
//   plugins: {
//     // the correct Tailwind plugin name is `tailwindcss`
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };
