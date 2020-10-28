const { ItemCart } = require("../repository/database").models;

module.exports = {
    deleteAItem: async (req, res) => {
        const item = await ItemCart.findByPk(req.params.id);
        if (item) {
            item.destroy();
            return res.redirect("/user/cart");
        }
        return res.redirect("/user/cart");
    },
}