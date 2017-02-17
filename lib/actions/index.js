const requireDirectory = require('require-directory');
const start = (options) => {
  return (action) => action.start(options);
};

module.exports = {
  startAll : (options) => requireDirectory(module, {visit: start(options)})
};

