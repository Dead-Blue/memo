'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/api/memo', 'memo.getMemoList');
  app.post('/api/memo', 'memo.saveMemo');
};
