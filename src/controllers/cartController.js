const { ItemCart, Product } = require("../repository/database").models;

module.exports = {
    deleteAItem: async (req, res) => {
        const item = await ItemCart.findByPk(req.params.id);
        if (item) {
            item.destroy();
            return res.redirect("/user/cart");
        }
        return res.redirect("/user/cart");
    },
    changeAmountProduct: async (req, res) => {
        const { amount, idProduct } = req.body;
        if (idProduct) {
            const product = await Product.findByPk(idProduct);
            const totalValue = Number(amount) * Number(product.precio);
            return res.json({
                precio: totalValue,
            });
        }
        return res.json({});
    },
};
