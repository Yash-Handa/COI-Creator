const mongoose = require('mongoose');

const { Schema } = mongoose;

const SubSchema = new Schema({
  number: { // number of the Sub eg. a, b, c,
    type: String,
    required: [true, 'Sub number is required'],
    minlength: 1,
    lowercase: true,
    trim: true,
  },
  sub_schema: { // detail of the Sub, description eg. Lists India's states and territories...
    type: String,
    required: [true, 'Sub detail is required'],
    trim: true,
  },
  note: { // provides detail about the amendment time and act, whether it is repealed(it's an arry)
    type: Array,
    default: undefined,
  },
});

module.exports = SubSchema;
