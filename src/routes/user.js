const { Router } = require("express");
const router = Router();
const { userController } = require("../controllers");
const routerStore = require("./store");

router.get("/", (req, res) => {
    res.redirect("/user/home");
});

router.get("/home", (req, res) => {
    const user = req.user;
    console.log(user);
    res.render("user/perfil", {
        title: "Perfil | Mujeres CTIAM",
        user,
        isAuthenticated: true,
    });
});

router.post("/update", userController.updateAUser);

router.get("/favorites", userController.getFavorites);

router.use("/store", routerStore);

module.exports = router;
