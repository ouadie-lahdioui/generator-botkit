const requireDirectory = require('require-directory');
const visitor = (options) => {
  return (action) => action.write(options);
};

module.exports = (options) => requireDirectory(module, {visit: visitor(options)});
