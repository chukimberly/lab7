
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
  // fields are defined here
  "title": "string",
  "image": "string",
  "date": "date",
  "summary": "string"
});

exports.Project = Mongoose.model('Project', ProjectSchema);


