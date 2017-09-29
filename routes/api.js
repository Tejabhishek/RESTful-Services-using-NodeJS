//Dependencies

var express = require('express');
var router = express.Router();


//Routes
router.get('/products', function(req,res){
	res.send('API is Working too !!');
});




//Return Router
module.exports = router;
