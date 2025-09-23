module.exports = {
  presets: [
    ['@babel/preset-env', { targets: 'defaults' }], // prevodi moderni JS (ES6+) u kompatibilan JS
    ['@babel/preset-react', { runtime: 'automatic' }], // prevodi JSX u React.createElement
  ],
  plugins: [
    "@babel/plugin-transform-runtime" // optimizuje kod i smanjuje bundle size
  ]
};
