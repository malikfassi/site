var express = require('express'),
  router = express.Router(),
  role = require('./admin/role');


module.exports = function () {
  router.get('/role/loadChildren', role.loadChildren);
  router.post('/role/search/page/:pageStart/:pageEnd', role.searchPage);

  router.post('/role/edit/:id', role.fetchOne);
  router.post('/role/cancelEdit/:id', role.fetchOne);
  router.get('/role/:id', role.fetchOne);

  return router;
};
