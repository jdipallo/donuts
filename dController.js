var Donut = require('./donut_model')

var donutController = {
	all: function(req, res) {
		Donut.find({}, function(err, donuts) {
			if (err) throw err;

			res.json(donuts)
		})
	},
	create: function(req, res) {
		var newDonut = new Donut(req.body)

		newDonut.save(function(err, donut) {
			if (err) throw err;

			res.json(donut)
		})
	},
	single: function(req, res) {
		var id = req.params.id;
		Donut.findById(id, function(err, donut) {
			if (err) throw err; 
			res.json(donut)
		})
	},
	update: function(req, res) {
		var id = req.params.id;

		Donut.findByIdAndUpdate(id, req.body, { new: true }, function(err, donut) {
			if (err) throw err; 
			res.json(donut)
		})
	},
	destroy: function(req, res) {
		var id = req.params.id;

		Donut.findByIdAndRemove(id, function(err) {
			if (err) {
				res.json({ status: 400, success: false, message: "ERROR: Could not delete " + id })
			} else {
				res.json({ status: 200, success: true, message: "Successfully Deleted Donut " + id })
			}
		})
	}
}

module.exports = donutController