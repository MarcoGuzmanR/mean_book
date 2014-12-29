exports.render = function(req, res) {
  res.render('index', {
    title: 'Goodbye World',
    user: JSON.stringify(req.user)
  });
}
