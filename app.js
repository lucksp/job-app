// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Create Express App Object \\
var app = express();

// Mongoose Connector \\
mongoose.connect('mongodb://localhost/mycompanyname')
require('./models/modelApplicant.js')


// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\

app.get('/', function(req, res) {
	res.sendFile('html/index.html', {root : './public'});
});

var applicantCtrl = require('./controllers/controllerApplicant.js')

// creates applicant data
app.get('/applicant', applicantCtrl.getApplicant)

app.post('/applicant', applicantCtrl.createApplicant)

app.get('/success', function(req, res){
	res.sendFile('html/success.html', {root: './public'})
});

// list of applicants
app.get('/applicants', function(req, res){
	res.sendFile('html/applicants.html', {root : './public'});
});


app.post('/applicant/delete', applicantCtrl.deleteApplicant)

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})