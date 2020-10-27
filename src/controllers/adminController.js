const { User, Store } = require("../repository/database").models;

module.exports = {
    findNoSellers: async (req, res) => {
        const users = await User.findNoSellers();
        res.render("admin/list-users", {
            users,
        });
    },
    makeSeller: async (req, res) => {
        const idUser = req.params.id;
        const userDB = await User.findByPk(idUser);
        const { id, telefono, email } = userDB;
        const tienda = await Store.create({
            id,
            nombre: "Nombre de la tienda",
            descripcion: "Descripción de la tienda",
            telefono,
            email,
        });
        if (tienda) {
            userDB.is_seller = 1;
            userDB.save();
            return res.redirect("/admin/user-list");
        }
        return res.send("No se ha creado la tienda");
    },
};
