/*
 Login
 */
exports.login = function(req, res) {
  var user = req.body;
  res.status(200).json({
    name: 'World',
    user: user
  });
};

/*
 User
 */
exports.user = function(req, res) {
  res.status(200).json({
    name: 'World'
  });
};
