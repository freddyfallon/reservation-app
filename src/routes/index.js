const cinemas = require('./cinema-routes');

module.exports = (app, db) => {
  cinemas(app, db);
};