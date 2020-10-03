const {DataTypes} = require("sequelize");
const {sequelize} = require("../database");
const Tienda = require("./Tienda");
const Categoria = require("./Categoria");
const Marca = require("./Marca");

const Product = sequelize.define(

    "producto",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
        },
        id_tienda: {
            type : DataTypes.INTEGER,
            references:{
                model: Tienda,
                key: "id",
            },
        },
        id_categoria: {
            type: DataTypes.INTEGER,
            references :{
                model : Categoria,
                key : "id",
            },
        },
        id_marca: {
            type: DataTypes.INTEGER,
            references : {
                model : Marca,
                key : "id",
            },
        },
        titulo: {
            type : DataTypes.STRING(80),
            allowNull : false,
        },
        descripcion : {
            type: DataTypes.STRING(300),
            allowNull : false,
        },
        detalle : {
            type : DataTypes.STRING(150),
            allowNull : false,
        },
        precio : {
            type : DataTypes.DOUBLE,
            allowNull : false,
        },
        fecha : {
            type : DataTypes.DATE,
            allowNull : false,
            defaultValue: DataTypes.NOW,
        }, 
        stock : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
    },
    {
        freezeTableName : true,
        timestamps: false,

    }

)

module.exports = Product;