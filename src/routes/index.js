const routes = require('./cinema-routes');

module.exports = (app, collection) => {
  routes(app, collection);
};
