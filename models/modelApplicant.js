var mongoose = require('mongoose');

var Applicant = mongoose.Schema({
	name	: String,
	bio		: String,
	skills	: String,
	yearsExp: Number,
	why		: String,
});

var ApplicantInfo = mongoose.model('ApplicantInfo', Applicant)

module.exports = {
	ApplicantInfo : ApplicantInfo
}
