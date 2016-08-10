/**
 * Created by Asebban on 03/06/2016.
 */
var r = {"object":null,"status":0,"message":null,"listItems":[{"id":1,"code":"DEV","libelle":"Développement","traceToken":null},{"id":2,"code":"CST","libelle":"Consulting","traceToken":null},{"id":3,"code":"MO","libelle":"Main d'oeuvre","traceToken":null},{"id":4,"code":"APP","libelle":"Appareillage","traceToken":null}],"count":null,"misc":null};
var types = r.listItems;

exports.findAll = function(req, res) {
  res.status(200).json(r);
};
