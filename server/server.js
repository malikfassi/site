/**
 * Module dependencies.
 */

var base = '/api';
var express = require('express'),
  project = require('./routes/project'),
  formateur = require('./routes/formateur'),
  type = require('./routes/type'),
  emploi = require('./routes/emploi'),
  auth = require('./routes/auth'),
  navigation = require('./routes/navigation'),
  workflow = require('./routes/workflow'),
  routesAdmin = require('./routes/admin')();
  bodyParser = require('body-parser'),
  app = express(),
  port = process.env.SERVER_PORT || 9000;

// Configuration
app.set('port', port);
app.use(bodyParser());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get(base+'/rs/test/formateur', formateur.findAll);
app.get(base+'/rs/referentiel/type', type.findAll);
app.get(base+'/rs/referentiel/emploi', emploi.findAll);
app.get(base+'/rs/project', project.findAll);
app.get(base+'/rs/project/:id', project.findById);
app.post(base+'/rs/project', project.addProject);
app.get(base+'/rs/project/edit/:id', project.editProject);
app.get(base+'/rs/project/cancelEdit/:id', project.cancelEditProject);
app.put(base+'/rs/project/*', project.updateProject);
app.delete(base+'/rs/project/:id', project.deleteProject);

app.get(base+'/rs/workflow/allowedTransitions', workflow.allowedTransitions);
app.get(base+'/rs/workflow/execute\?*', workflow.executeTransition);

app.get(base+'/rs/authenticate/user', auth.user);
app.post(base+'/rs/authenticate/login', auth.login);

app.get(base+'/rs/navigation/loadMenu', navigation.loadMenu);

app.use(base+'/rs/admin', routesAdmin);

module.exports = app;

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
