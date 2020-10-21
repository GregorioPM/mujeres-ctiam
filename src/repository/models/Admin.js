const  { DataTypes } = require("sequelize");
const  { sequelize } = require("../database");

const Admin = sequelize.define(
    "admin",{
        id: {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre_Usuario:{
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(60),
            allowNull: false,
            unique: true,
        },
        password:{
            type: DataTypes.STRING(20),
            allowNull: false,
        }
    },
    { freezeTableName: true }
)

Admin.encryptPassword = (password) =>
    bcrypt.hashSync(password, bcrypt.genSaltSync(10));
Admin.prototype.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = Admin;
