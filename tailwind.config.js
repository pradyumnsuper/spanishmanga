module.exports = {
  content: ['App.js',
  './screens//*.{html,js}',
  './Premium//*.{html,js}',
  'Onboardingitem.js',
],
  
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
