'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('assessment service', function() {
  it('registered the assessments service', () => {
    assert.ok(app.service('assessments'));
  });
});
