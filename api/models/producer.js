const mongoose = require('mongoose');

const producerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: 'Text',
    description: { type: String, default: '' },
    thumbnail: { type: String, default: '' }
});

module.exports = mongoose.model('Producer', producerSchema);