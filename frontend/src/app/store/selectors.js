// https://github.com/diegohaz/arc/wiki/Selectors
const upperFirst = require('lodash/upperFirst');

// const req = require.context('.', true, /\.\/.+\/selectors\.js$/);
const req = {
  './modal/selectors.js': require('./modal/selectors'),
  './entities/selectors.js': require('./entities/selectors'),
  './resource/selectors.js': require('./resource/selectors'),
};

Object.keys(req).forEach((key) => {
  const storeName = key.replace(/\.\/(.+)\/.+$/, '$1');
  const fromName = `from${upperFirst(storeName)}`;
  const selectors = req[key];
  const getState = (state = {}) => state[storeName] || {};

  module.exports[fromName] = {};

  Object.keys(selectors).forEach((name) => {
    const selector = selectors[name];
    if (typeof selector === 'function') {
      module.exports[fromName][name] = (state, ...args) => selector(getState(state), ...args);
    }
  });
});
