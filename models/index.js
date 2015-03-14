var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tripplanner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error: '));
var Schema = mongoose.Schema;

var placeSchema = new Schema({
  address: String,
  city: String,
  state: String,
  phone: String,
  location: [Number]
});

var hotelSchema = new Schema({
	name: String,
	place: {type: Schema.Types.ObjectId, ref: 'pCollections'},
	num_stars: {type:Number, min:1, max:5},
	amenities: String
});

var ttdSchema = new Schema({
	name: String,
	place: {type: Schema.Types.ObjectId, ref: 'pCollections'},
	age_range: String
});

var restSchema = new Schema({
	name: String,
	place: {type: Schema.Types.ObjectId, ref: 'pCollections'},
	cuisine: String,
	price: {type: Number, min:1, max: 5}
});

var Place = mongoose.model('pCollections', placeSchema);
var Hotel = mongoose.model('hCollections', hotelSchema);
var ThingsToDo = mongoose.model('ttdCollections', ttdSchema);
var Rest = mongoose.model('rCollections', restSchema);

module.exports = {"P": Place, "H": Hotel, "T": ThingsToDo, "R": Rest};
