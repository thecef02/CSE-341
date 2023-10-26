const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.pamelaRoute);
routes.get('/nate', lesson1Controller.nateRoute);

module.exports = routes;