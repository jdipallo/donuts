var mongoose 	= require('mongoose')

var donutSchema = mongoose.Schema({
	name:     	String,
	holed: 		Boolean,
	flavor:     String,
	filling: 	String,
	toppings: 	[String],
	price: 		Number,
	expiration: Date, 
	calories:  	Number
})

var Donut 	= mongoose.model('donut', donutSchema);

module.exports = Donut;