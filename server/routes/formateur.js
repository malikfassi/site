/*
 Login
 */
var r = {"object":null,"status":0,"message":null,"listItems":[{"id":1,"code":"AA","libelle":"Ahmed AZZAM","traceToken":null},{"id":2,"code":"AB","libelle":"Aziz BADDOU","traceToken":null},{"id":51,"code":"IM","libelle":"Issam MESRAR","traceToken":null},{"id":101,"code":"MK","libelle":"Mohammed KABBAJ","traceToken":null},{"id":151,"code":"ABB","libelle":"Abdellah BLINDA","traceToken":null},{"id":152,"code":"JCO","libelle":"Jamyl Charif d'OUAZZANE","traceToken":null},{"id":153,"code":"SJ","libelle":"Jamal SAMI","traceToken":null}],"count":7,"misc":null};
var formateurs = r.listItems;

exports.findAll = function(req, res) {
  res.status(200).json(r);
};

