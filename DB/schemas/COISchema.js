const mongoose = require('mongoose');
const Schedule = require('./ScheduleSchema');
const Part = require('./PartSchema');
const Art = require('./ArtSchema');
const Clause = require('./ClauseSchema');
const SubClause = require('./SubSchema');

const { Schema } = mongoose;

const COISchema = new Schema({ // every alpha-numeric entity is saved in lowercase
  schedule: Schedule,
  part: Part,
  articles: [{ type: Schema.Types.ObjectId, ref: 'COI' }],
  art: Art,
  clauses: [{ type: Schema.Types.ObjectId, ref: 'COI' }],
  clause: Clause,
  subs: [{ type: Schema.Types.ObjectId, ref: 'COI' }], // array of sub-clause
  sub: SubClause, // sub-clause
});

const COI = mongoose.model('users', COISchema);

module.exports = COI;
