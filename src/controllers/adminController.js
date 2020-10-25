const { User, Store } = require("../repository/database").models;

const userController = (module.exports = {
    findNoSellers: async (req, res) => {
        const users = await User.findNoSellers();
        res.render("admin/list-users", {
            users,
        });
    },
    makeSeller: async (req, res) => {
        const idUser = req.params.id;
        const { id, telefono, email } = await User.findByPk(idUser);
        const tienda = await Store.create({
            id,
            nombre: "Nombre de la tienda",
            descripcion: "Descripción de la tienda",
            telefono,
            email,
        });
        if (tienda) {
            return res.redirect("/admin/user-list");
        }
        return res.send("No se ha creado la tienda");
    },
});
