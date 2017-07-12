'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = {};
  // should change to your own
  config.keys = appInfo.name + '_1499674355719_6004';

  // add your config here

  config.customLogger = {
     spiderLogger: {
        file: path.join(appInfo.root, 'logs/splider.log')
     }
  }

  config.redis = {
     client: {
       port: 6379,          // Redis port
       host: '127.0.0.1',   // Redis host
       password: 'dmoo_redis',
       db: 0,
     },
  };

  return config;
};
