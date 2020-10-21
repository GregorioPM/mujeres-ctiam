const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("database_ctiam", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

exports.sequelize = sequelize;

const Address = require("../models/Direccion");
const Admin = require("../models/Admin");
const Banner = require("../models/Banner");
const Category = require("../models/Categoria");
const Cart = require("../models/Carrito");
const City = require("../models/Ciudad");
const Comentary = require("../models/Comentario");
const Favorite = require("../models/Favorito");
const ItemSale = require("../models/ItemSale");
const ItemCart = require("../models/ItemCart");
const LandMark = require("../models/Marca");
const Order = require("../models/Pedido");
const Photography = require("../models/Fotografia");
const Product = require("../models/Producto");
const Question = require("../models/Pregunta");
const Sale = require("../models/Venta");
const Store = require("../models/Tienda");
const User = require("../models/Usuario");

// {alter:true}
(async () => {
    sequelize.sync({force:true}).then(() => console.log("tables created"));
})();

require("../asociation")({
    Address,
    Category,
    Cart,
    City,
    Comentary,
    Favorite,
    ItemCart,
    ItemSale,
    LandMark,
    Order,
    Photography,
    Product,
    Question,
    Sale,
    Store,
    User,
});

exports.models = {
    Address,
    Category,
    Cart,
    City,
    Comentary,
    Favorite,
    ItemCart,
    ItemSale,
    LandMark,
    Order,
    Photography,
    Product,
    Question,
    Sale,
    Store,
    User,
};
