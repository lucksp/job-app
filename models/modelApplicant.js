var mongoose = require('mongoose');


var Applicant = mongoose.Schema({

	name	: {type: String, default : ""},
	Bio		: {type: String, default : ""},
	Skills	: {type: String, default : []},
	yearsExp: {type: Number},
	Why		: {type: String, default : ""},

});

var ApplicantInfo = mongoose.model('ApplicantInfo', Applicant)

// var upplicant = new ApplicantInfo({
// 	name	: 'Phil',
// 	Bio		: 'About me',
// 	Skills	: 'tell me, more please',
// 	yearsExp: 12,
// 	Why		: 'of course i can!'
// })
// upplicant.save()