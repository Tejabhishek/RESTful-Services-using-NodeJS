//Dependencies

var express = require ('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

//MondoDB Connections
mongoose.connect('mongodb://localhost/rest_test')


//Express
var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


//Routes
app.use('/api',require('./routes/api'))

/*app.get('/',function(req,res){
	res.send('hello world');
});
*/


//Start Server
app.listen(3000);
console.log('API is running on 3000 port');
