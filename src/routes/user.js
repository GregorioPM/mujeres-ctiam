const { Router } = require("express");
const router = Router();
const { cartController, userController } = require("../controllers");

router.get("/", (req, res) => {
    res.redirect("/user/home");
});

router.get("/home", (req, res) => {
    const user = req.user;
    res.render("user/perfil", {
        title: "Perfil | Mujeres CTIAM",
        user,
        isAuthenticated: true,
    });
});

router.post("/update", userController.updateAUser);

router.get("/favorites", userController.getFavorites);

router.get("/cart", userController.getCart);

router.get("/cart/delete/:id", cartController.deleteAItem);

module.exports = router;
