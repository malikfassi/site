/**
 * Created by Asebban on 03/06/2016.
 */
var r ={"object":null,"status":0,"message":null,"listItems":[{"id":1,"code":"AG","libelle":"Agriculteur","traceToken":null},{"id":2,"code":"TEC","libelle":"Technicien","traceToken":null},{"id":3,"code":"MGR","libelle":"Manager","traceToken":null},{"id":4,"code":"ING","libelle":"Ingénieur","traceToken":null},{"id":5,"code":"CONS","libelle":"Consultant","traceToken":null}],"count":null,"misc":null};
var emplois = r.listItems;

exports.findAll = function(req, res) {
  res.status(200).json(r);
};
