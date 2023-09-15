const path = require('path');

module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
  plugins: ['@babel/plugin-transform-runtime'],
};
