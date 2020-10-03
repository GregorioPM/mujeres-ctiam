const { DataTypes } = require("sequelize");
const { sequelize } = require("../database");
const User = require("./Usuario");

const Store = sequelize.define(
    "tienda",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: User,
                key: "id",
            },
        },
        nombre: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        telefono: {
            type: DataTypes.STRING(12),
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING(60),
            allowNull: false,
            unique: true,
        },
    },
    { freezeTableName: true }
);

module.exports = Store;
