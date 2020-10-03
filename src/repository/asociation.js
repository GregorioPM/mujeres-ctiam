module.exports = function ({
    Address,
    Category,
    City,
    LandMark,
    Order,
    Store,
    User,
}) {
    User.hasMany(Address, {
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        foreignKey: { name: "id_usuario" },
    });
    Address.belongsTo(User, {
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        foreignKey: { name: "id_usuario" },
    });
    City.hasMany(Address, {
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        foreignKey: { name: "id_ciudad" },
    });
    Address.belongsTo(City, {
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        foreignKey: { name: "id_ciudad" },
    });
    User.hasOne(Store, {
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        foreignKey: { name: "id" },
    });
    Store.belongsTo(User, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
        foreignKey: { name: "id" },
    });
    User.hasMany(Order, {
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        foreignKey: { name: "id_usuario" },
    });
    Order.belongsTo(User, {
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        foreignKey: { name: "id_usuario" },
    });
};
