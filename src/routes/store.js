const { Router } = require("express");
const { Store } = require("../repository/database").models;
const isSeller = require("../middlewares/isSeller");
const { storeController } = require("../controllers");
const router = Router();

router.use(isSeller);

router.get("/", async (req, res) => {
    const user = req.user;
    if (req.user.is_seller) {
        const store = await Store.findByPk(user.id);
        if (store) {
            return res.render("seller/store", {
                title: "Store | Mujeres CTIAM",
                user,
                store: store.dataValues,
                isAuthenticated: true,
            });
        }
    }
    return res.redirect("/");
});

router.post("/update", storeController.updateAStore);

module.exports = router;
