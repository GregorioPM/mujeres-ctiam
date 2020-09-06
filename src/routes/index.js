const { Router } = require("express");
const router = Router();
const index = require("./login");
const isAuthenticated = require("../middlewares/isAuthenticated");

router.get("/", (req, res) => {
    res.render("index", {
        title: "Home",
    });
});

router.use("/login", index);

router.use((req, res, next) => {
    isAuthenticated(req, res, next);
});

router.get("/home", (req, res) => {
    console.log(req.session.id);
    res.render("user/perfil");
});

module.exports = router;
