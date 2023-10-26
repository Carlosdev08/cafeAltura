/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  // ...
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}

module.exports = {
  purge: [
    // ...
    './src/**/*.html',
    './src/**/*.js',
  ],
  // ...
}
