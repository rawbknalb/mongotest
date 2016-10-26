'use strict';

const service = require('feathers-mongoose');
const component = require('./component-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: component,
    paginate: {
      default: 100,
      max: 200
    }
  };

  // Initialize our service with any options it requires
  app.use('/components', service(options));

  // Get our initialize service to that we can bind hooks
  const componentService = app.service('/components');

  // Set up our before hooks
  componentService.before(hooks.before);

  // Set up our after hooks
  componentService.after(hooks.after);
};
