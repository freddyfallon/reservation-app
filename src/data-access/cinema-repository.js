const ObjectID = require('mongodb').ObjectID;

class CinemaRepository {
  getCinemas(db) {
    return new Promise((resolve, reject) => {
      db.collection('cinemas').find().toArray((err, items) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(items);
        }
      });
    });
  }

  getCinema(id, db) {
    return new Promise((resolve, reject) => {
      const details = { _id: new ObjectID(id) };
      db.collection('cinemas').findOne(details, (err, item) => {
        if (err) {
          reject(new Error(`An error has occured: ${err}`));
        } else {
          resolve(item);
        }
      });
    });
  }

  addCinema(name, description, db) {
    return new Promise((resolve, reject) => {
      const cinema = { name, description };
      db.collection('cinemas').insert(cinema, (err, result) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(`${result.ops[0].name} was successfully added`);
        }
      });
    });
  }
}

module.exports = new CinemaRepository();
