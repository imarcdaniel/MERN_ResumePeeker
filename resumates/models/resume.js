const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    jobTitle: {type: String},
    experience: {type: String}, 
}, {
    timestamps: true
})

module.exports = mongoose.model('Resume', resumeSchema);