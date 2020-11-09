const { Router } = require("express");
const router = Router();
const routerStore = require("./store");
const { Product, Store } = require("../repository/database").models;
const isSeller = require("../middlewares/isSeller");

router.use(isSeller);

router.get("/", (req, res) => res.redirect("/seller/store"));

router.get("/products", async (req, res) => {
    console.log("someone", req.params.action);
    const user = req.user;
    const store = await Store.findByPk(user.id);
    const products = await Product.findAll({
        where: {
            id_tienda: store.id,
        },
    });
    return res.render("seller/index", {
        title: "Mis publicaciones | Mujeres CTIAM",
        user,
        store: store.dataValues,
        isAuthenticated: true,
        products,
    });
});

router.get("/products:action", async (req, res) => {
    const user = req.user;
    const store = await Store.findByPk(user.id);
    return res.render("seller/store", {
        title: "Mis publicaciones | Mujeres CTIAM",
        user,
        store: store.dataValues,
        isAuthenticated: true,
    });
});

router.use("/store", routerStore);

module.exports = router;
