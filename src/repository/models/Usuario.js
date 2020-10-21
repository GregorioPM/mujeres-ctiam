const bcrypt = require("bcrypt");
const { DataTypes } = require("sequelize");
const { sequelize } = require("../database");

const User = sequelize.define(
    "usuario",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombres: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        apellidos: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        dni: {
            type: DataTypes.STRING(12),
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING(60),
            allowNull: false,
            unique: true,
        },
        telefono: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        telefono_alternativo: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { freezeTableName: true }
);
User.encryptPassword = (password) =>
    bcrypt.hashSync(password, bcrypt.genSaltSync(10));
User.prototype.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = User;
