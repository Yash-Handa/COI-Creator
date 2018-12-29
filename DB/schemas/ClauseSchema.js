const mongoose = require('mongoose');

const { Schema } = mongoose;

const ClauseSchema = new Schema({
  number: { // number of the Clause eg. 1, 2, 3,
    type: String,
    required: [true, 'Clause number is required'],
    minlength: 1,
    lowercase: true,
    trim: true,
  },
  note: { // provides detail about the amendment time and act, whether it is repealed(it's an arry)
    type: Array,
    default: undefined,
  },
});

module.exports = ClauseSchema;
