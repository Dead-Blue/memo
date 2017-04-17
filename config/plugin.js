'use strict';

// had enabled by egg
// exports.static = true;
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};
exports.validate = {
  package: 'egg-validate',
};
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
