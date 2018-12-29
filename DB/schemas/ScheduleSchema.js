const mongoose = require('mongoose');

const { Schema } = mongoose;

const ScheduleSchema = new Schema({
  number: { // number of the Schedule eg. 1, 2, 3,
    type: String,
    required: [true, 'Schedule number is required'],
    maxlength: 2,
    minlength: 1,
    lowercase: true,
    trim: true,
  },
  name: { // name of the schedule eg. first schedule
    type: String,
    required: [true, 'Schedule name is required'],
    trim: true,
  },
  detail: { // detail of the schedule, description eg. Lists India's states and territories...
    type: String,
    required: [true, 'Schedule detail is required'],
    trim: true,
  },
  note: { // provides detail about the amendment time and act.
    type: String,
    trim: true,
  },
});

module.exports = ScheduleSchema;
