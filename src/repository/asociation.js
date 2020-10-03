module.exports = function ({
    Address,
    Category,
    City,
    LandMark,
    Order,
    Photography,
    Question,
    Product,
    Sale,
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
    Product.belongsTo(LandMark, {
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        foreignKey : { name: "id_marca"},
    });
    Product.belongsTo(Store, {
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        foreignKey : { name : "id_tienda" },
    });
    Product.belongsTo(Category,{
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        foreignKey : { name : "id_categoria" },
    });
    LandMark.hasMany(Product,{
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        foreignKey : { name: "id_marca"},
    });
    Category.hasMany(Product,{
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        foreignKey : { name : "id_categoria" },
    });
    Store.hasMany(Product,{
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        foreignKey : { name : "id_tienda" },
    });
    Photography.belongsTo(Product,{
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        foreignKey : { name: "id_producto"},
    });
    Product.hasMany(Photography,{
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        foreignKey : { name: "id_producto"},
    });
    Sale.belongsTo(Order,{
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        foreignKey : { name : "id_pedido" },
    });
    Sale.belongsTo(Store, {
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        foreignKey : { name: "id_tienda"},
    });
    Store.hasMany(Sale,{
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        foreignKey : { name: "id_tienda"},
    });
    Order.hasMany(Sale, {
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        foreignKey : { name: "id_tienda"},
    });
    Question.belongsTo(User,{
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        foreignKey : { name: "id_usuario"},
    });
    User.hasMany(Question,{
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        foreignKey : { name: "id_usuario"},
    });
    Question.belongsTo(Product, {
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        foreignKey : { name: "id_producto"},
    });
    Product.hasMany(Question,{
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        foreignKey : { name: "id_producto"},
    })
};
