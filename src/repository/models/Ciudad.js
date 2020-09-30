module.exports = (sequelize, DataTypes) => {
    const City = sequelize.define("ciudades", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING(35),
            allowNull: false,
        },
    });
    return City;
};
