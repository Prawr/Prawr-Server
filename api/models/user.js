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
    }
});

module.exports = mongoose.model('User', userSchema);