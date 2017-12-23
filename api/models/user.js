const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    passwordHash: String,
    registerTimeStamp: { type: Number, default: Date.now() },
    usersFollowing: [],
    accountStatus: {
        isBanned: { type: Boolean, default: false },
        reason: { type: String, default: '' }
    },
    avatar: { type: String, default: '' },
    profile: {
        url: { type: String, default: '' },
        statusmessage: { type: String, default: '' },
        background: { type: String, default: '' }
    }
});

module.exports = mongoose.model('User', userSchema);