'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/spider', 'spider.index');
};
