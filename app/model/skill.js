const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    skillName: { type: String, required: true },
    status: { type: Number, default:0 }
});

module.exports = mongoose.model('Skill', skillSchema);