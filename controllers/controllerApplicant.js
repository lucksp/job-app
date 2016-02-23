// NO DATA STORED FOR THIS EXERCISE

var Applicant = require('../models/modelApplicant.js')

function createApplicant (req, res) {
	var applicant = new Applicant.ApplicantInfo({
		name	: req.body.name,
		bio		: req.body.bio,
		skills	: req.body.skills.split(', '),
		yearsExp: +req.body.yearsExp,
		why		: req.body.why,
	})
	applicant.save(function(err, savedApplicant){
		res.send(savedApplicant)
	})
}

function getApplicant (req, res) {
	Applicant.ApplicantInfo.find({}, function(err, docs){
		res.send(docs)
	})
}

function deleteApplicant (req, res) {
	console.log(req.body.id)
	Applicant.ApplicantInfo.remove({_id:req.body.id}, function(err, res){
	})
	Applicant.ApplicantInfo.find({}, function(err, docs){
		res.send(docs)
	})
}

module.exports = {
	createApplicant : createApplicant,
	getApplicant 	: getApplicant,
	deleteApplicant : deleteApplicant
}