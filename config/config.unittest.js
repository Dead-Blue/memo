'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1490616285321_8280';
  config.mongoose = {
    url: 'mongodb://localhost/memoTest',
    options: {},
  };
  config.security = {
    csrf: {
      ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
    domainWhiteList: [ 'http://localhost:3000' ],
  };
  return config;
};
