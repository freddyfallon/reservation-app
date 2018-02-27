const cinemas = (app, db) => {
  app.post('/cinemas', (req, res) => {
    const cinema = { name: req.body.name, description: req.body.description };
    db.collection('cinemas').insert(cinema, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });
}

module.exports = cinemas;