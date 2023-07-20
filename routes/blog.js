module.exports = function(app) {
  app.get('/blogs', function(req, res) {
    res.render('blogs');
  });

  app.get('/blogs/:id', function(req, res) {
    res.render('blogs/' + req.params.id);
  });
}