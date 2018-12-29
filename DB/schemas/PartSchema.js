const mongoose = require('mongoose');

const { Schema } = mongoose;

const PartSchema = new Schema({
  number: { // number of the Part eg. 1, 2, 3,
    type: String,
    required: [true, 'Part number is required'],
    maxlength: 2,
    minlength: 1,
    lowercase: true,
    trim: true,
  },
  name: { // name of the Part eg. States and union territories
    type: String,
    required: [true, 'Part name is required'],
    trim: true,
  },
  note: { // provides detail about the amendment time and act.
    type: String,
    trim: true,
  },
});

module.exports = PartSchema;
