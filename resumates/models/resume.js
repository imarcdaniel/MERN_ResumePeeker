const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resumeSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: {type: String},
    level: {type: String}, 
    company: {type: String}
}, {
    timestamps: true
})

module.exports = mongoose.model('Resume', resumeSchema);