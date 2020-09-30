const { Sequelize, DataTypes } = require("sequelize");
const AddressModel = require("../models/Direccion");
const CityModel = require("../models/Ciudad");
const UserModel = require("../models/Usuario");

const sequelize = new Sequelize("database_ctiam", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

const User = UserModel(sequelize, DataTypes);
const Address = AddressModel(sequelize, DataTypes);
const City = CityModel(sequelize, DataTypes);

(async () => {
    sequelize.sync({ force: true }).then(() => console.log("tables created"));
})();

require("../asociation")({ Address, City, User });

module.exports = {
    Address,
    City,
    User,
};
