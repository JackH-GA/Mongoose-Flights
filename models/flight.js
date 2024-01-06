const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
//this syntax is called destructuring
// const { Schema } = mongoose *exact same thign as the following line*
const Schema = mongoose.Schema;
	
const flightSchema = new Schema({
  airline: String,
  airport: String,
  flightNo: Number,
  departs: Date
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);