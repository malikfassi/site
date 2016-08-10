/**
 * Created by Asebban on 04/06/2016.
 */
var r = {"object":null,"status":0,"message":null,"listItems":[{"name":"valider","to":"VALIDE","visible":true,"wfactionId":"300002"},{"name":"rejeter","to":"REJETE","visible":true,"wfactionId":"300003"}],"count":null,"misc":"EN ATTENTE"};
var rex = {"object":null,"status":0,"message":null,"listItems":[],"count":null,"misc":"VALIDE"};

exports.allowedTransitions = function(req, res) {
  res.status(200).json(r);
};

exports.executeTransition = function(req, res) {
  res.status(200).json(rex);
};
