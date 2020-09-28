const { Sequelize, DataTypes } = require("sequelize");
const UserModel = require("../models/User");
const sequelize = new Sequelize("database_ctiam", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

const User = UserModel(sequelize, DataTypes);

(async () => {
    sequelize.sync({ force: false }).then(() => console.log("tables created"));
})();

module.exports = {
    User,
};
