'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('component service', function() {
  it('registered the components service', () => {
    assert.ok(app.service('components'));
  });
});
