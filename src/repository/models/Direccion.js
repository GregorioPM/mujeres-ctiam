module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define("direcciones", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        barrio: {
            type: DataTypes.STRING(12),
            allowNull: false,
            unique: true,
        },
        avenida: {
            type: DataTypes.STRING(60),
            allowNull: false,
            unique: true,
        },
        calle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        numero: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING(),
            allowNull: false,
        },
    });
    return Address;
};
