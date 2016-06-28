var apiRouter 			= require('express').Router();
var donutController 	= require('./dController');

apiRouter.route('/donuts')
	.get(donutController.all)
	.post(donutController.create)
	
apiRouter.route('/donuts/:id')
	.get(donutController.single)
	.put(donutController.update)
	.delete(donutController.destroy)
	
module.exports = apiRouter
