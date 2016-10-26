'use strict';

// component-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const componentSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const componentModel = mongoose.model('component', componentSchema);

module.exports = componentModel;
