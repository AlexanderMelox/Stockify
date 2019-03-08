const path = require('path');

module.exports = {
  options: {
    patterns: [path.resolve(__dirname, 'src/styles/base/*.scss')]
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  }
};
