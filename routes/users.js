var express = require('express');
var router = express.Router();

/* GET Users listing. */
router.get('/', function(req, res) {
	console.log(req.session);
	res.json(req.session);
});

module.exports = router;