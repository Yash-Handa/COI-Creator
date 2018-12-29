const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArtSchema = new Schema({
  number: { // number of the Art eg. 1, 2, 3,
    type: String,
    required: [true, 'Art number is required'],
    minlength: 1,
    lowercase: true,
    trim: true,
    index: true,
    unique: true,
    sparse: true,
  },
  name: { // name of the Art eg. Name and territory of the Union.
    type: String,
    required: [true, 'Art name is required'],
    trim: true,
  },
  note: { // provides detail about the amendment time and act, whether it is repealed(it's an arry)
    type: Array,
    default: undefined,
  },
});

module.exports = ArtSchema;
