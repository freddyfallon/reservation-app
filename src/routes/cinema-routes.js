const CinemaRepository = require('../data-access/cinema-repository');

const routes = (app, collection) => {
  app.get('/cinemas', (req, res) => {
    CinemaRepository.getCinemas(collection)
      .then(cinemas => {
        res.send(cinemas);
      })
      .catch(err => {
        res.send(`There was an error: ${err}`);
      });
  });

  app.get('/cinemas/:id', (req, res) => {
    CinemaRepository.getCinema(req.params.id, collection)
      .then(cinema => {
        res.send(cinema);
      })
      .catch(err => {
        res.send(err);
      });
  });

  app.post('/cinemas', (req, res) => {
    CinemaRepository.addCinema(req.body.name, req.body.description, collection)
      .then(response => {
        res.send(response);
      })
      .catch(err => { res.send(`There was an error: ${err}`); });
  });
};

module.exports = routes;
