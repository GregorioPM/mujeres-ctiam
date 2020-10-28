const { User } = require("../repository/database").models;

module.exports = {
    updateAUser: async (req, res) => {
        const user = req.body;
        let userDB = await User.findByPk(req.user.id);
        for (field in user) {
            userDB[field] = user[field];
        }
        await userDB.save();
        res.redirect("/user/home");
    },
    getFavorites: async (req, res) => {
        const favourites = await User.findFavorites(req.user.id);
        res.render("user/favourite", {
            title: "Favoritos | Mujeres CTIAM",
            user: req.user,
            isAuthenticated: true,
            favourites,
        });
    },
    getCart: async (req, res)=>{
        const cart = await User.findCart(req.user.id);
        res.render("user/cart",{
            title: "Carrito | Mujeres CTIAM",
            user: req.user,
            isAuthenticated: true,
            cart,
        })
    }
};
