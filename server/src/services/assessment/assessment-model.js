'use strict';

// assessment-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assessmentSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const assessmentModel = mongoose.model('assessment', assessmentSchema);

module.exports = assessmentModel;
