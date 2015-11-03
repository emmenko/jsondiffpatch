var environment = require('../environment');

exports.base = require('./base');
exports.html = require('./html');
exports.annotated = require('./annotated');

exports.console = require('./console');
// if (!environment.isBrowser) {
//   var consoleModuleName = './console';
//   exports.console = require(consoleModuleName);
// }
