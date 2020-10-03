const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("database_ctiam", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

exports.sequelize = sequelize;

const Address = require("../models/Direccion");
const Category = require("../models/Categoria");
const City = require("../models/Ciudad");
const LandMark = require("../models/Marca");
const Order = require("../models/Pedido");
const Store = require("../models/Tienda");
const User = require("../models/Usuario");

(async () => {
    sequelize.drop();
    sequelize.sync({ force: true }).then(() => console.log("tables created"));
})();

require("../asociation")({
    Address,
    Category,
    City,
    LandMark,
    Order,
    Store,
    User,
});

exports.models = {
    Address,
    Category,
    City,
    LandMark,
    Order,
    Store,
    User,
};
