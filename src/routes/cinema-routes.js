const ObjectID = require('mongodb').ObjectID;

const cinemas = (app, db) => {
  app.get('/cinemas', (req, res) => {
    db.collection('cinemas').find().toArray((err, items) => {
      if (err) {
        console.error(err);
        res.send({'error': 'An error has occured'})
      } else {
        res.send(items);
      }
    })
  })

  app.get('/cinemas/:id', (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    db.collection('cinemas').findOne(details, (err, item) => {
      if (err) {
        console.error(err);
        res.send({'error': 'An error has occured'})
      } else {
        res.send(item);
    }
    });
  });

  app.post('/cinemas', (req, res) => {
    const cinema = { name: req.body.name, description: req.body.description };
    db.collection('cinemas').insert(cinema, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(`${result.ops[0].name} successfully added`);
      }
    });
  });
}

module.exports = cinemas;