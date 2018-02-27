const ObjectID = require('mongodb').ObjectID;
const cinemaRepository = require('../data-access/cinema-repository');

const cinemas = (app, db) => {
  app.get('/cinemas', (req, res) => {
    cinemaRepository.getCinemas(db)
      .then(cinemas => {
        res.send(cinemas)
      })
      .catch(err => {
        res.send(`There was an error: ${err}`)
      })
  })

  app.get('/cinemas/:id', (req, res) => {
    cinemaRepository.getCinema(req.params.id, db)
      .then(cinema => {
        res.send(cinema);
      })
      .catch(err => {
        res.send(err);
      })
    
  });

  app.post('/cinemas', (req, res) => {
    cinemaRepository.addCinema(req.body.name, req.body.description, db)
      .then(response => {
        res.send(response)
      })
      .catch(err => {console.error(`There was an error: ${err}`)})
  });
}

module.exports = cinemas;