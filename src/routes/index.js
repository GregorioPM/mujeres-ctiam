const { Router } = require("express");
const router = Router();
const index = require("./login");
const isAuthenticated = require("../middlewares/isAuthenticated");

router.get("/", (req, res) => {
    res.render("index", {
        title: "Platzi",
    });
});

router.use("/login", index);

router.use((req, res, next) => {
    isAuthenticated(req, res, next);
});

router.get("/home", (req, res) => {
    const user = req.user;
    res.render("user/perfil", {
        user,
    });
});

module.exports = router;
