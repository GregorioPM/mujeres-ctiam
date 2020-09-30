module.exports = function ({ Address, City, User }) {
    Address.belongsTo(User, {
        foreignKey: { name: "id_usuario" },
    });
    Address.belongsTo(City, {
        foreignKey: { name: "id_ciudad" },
    });
};
