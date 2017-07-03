var mongoose = require('mongoose');

// Define our beer schema
var deploymentSchema   = new mongoose.Schema({
    devName: String,
    defectNo: Number,
    files: String,
    tower: String,
    propFile: Boolean,
    dvl: Boolean,
    qat: Boolean
  
});

// Export the Mongoose model
module.exports = mongoose.model('Deployments', deploymentSchema);