const bcrypt = require("bcrypt");
const { DataTypes, QueryTypes } = require("sequelize");
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
        is_seller: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    { freezeTableName: true }
);
User.encryptPassword = (password) =>
    bcrypt.hashSync(password, bcrypt.genSaltSync(10));
User.prototype.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};
User.findNoSellers = async () =>
    await sequelize.query(
        `SELECT u.id, u.nombres, u.apellidos, u.dni, u.email, u.createdAt FROM usuario u where u.is_seller = "0"`,
        { type: QueryTypes.SELECT }
    );
User.findFavorites = async (userID) =>
    await sequelize.query(
        `SELECT p.id,t.nombre as tienda,c.nombre as categoria,m.nombre as marca,p.titulo,p.descripcion,p.detalle,p.precio,p.stock 
        FROM producto p JOIN favorito f ON p.id=f.id_producto JOIN usuario u ON u.id=f.id_usuario JOIN tienda t ON t.id=p.id_tienda JOIN categoria c ON c.id=p.id_categoria JOIN marca m ON m.id=p.id_marca
        WHERE f.id_usuario = ${userID}`,
        { type: QueryTypes.SELECT }
    );

module.exports = User;
