module.exports = {
  plugins: {
    'postcss-import': {
      root: __dirname
    },
    'postcss-mixins': {},
    'postcss-each': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
    'postcss-reporter': {},
  },
};
