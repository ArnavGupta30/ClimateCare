module.exports = (app, db) => {
  app.get('/', (req, res) => {
    res.render('index');
  })

  app.get('/team', (req, res) => {
    res.render('team');
  })

  app.get('/projects', (req, res) => {
    res.render('projects');
  })
}