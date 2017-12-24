const mongoose = require('mongoose');
const config = require('../../config');

const accessStorageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ipAddress: String,
    expiration: {
        type: Number,
        default: config.getSessionTime() // block for the next 24 horus
    },
    uses: { type: Number, default: 1 }
});

module.exports = mongoose.model('AccessStorage', accessStorageSchema);