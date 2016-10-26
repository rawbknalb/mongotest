'use strict';

const service = require('feathers-mongoose');
const assessment = require('./assessment-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: assessment,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires,
  // Connect to the db
  app.use('/assessments', service(options));

  // Get our initialize service to that we can bind hooks
  const assessmentService = app.service('/assessments');

  // Set up our before hooks
  assessmentService.before(hooks.before);

  // Set up our after hooks
  assessmentService.after(hooks.after);
};
