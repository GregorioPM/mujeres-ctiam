const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    avatar: {
        type: String,
    },
});

userSchema.statics.encryptPassword = (password) =>
    bcrypt.hashSync(password, bcrypt.genSaltSync(10));

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
};
module.exports = mongoose.model("User", userSchema);
