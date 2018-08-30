import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let classSchema = new Schema({
  name: String,
  startDate: Date,
  endDate: Date,
  location: String,
  instructor: String
});

module.exports = mongoose.model('Class', classSchema);