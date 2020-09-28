const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    User.encryptPassword = (password) =>
        bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    User.prototype.comparePassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    return User;
};
