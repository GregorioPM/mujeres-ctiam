const { Router } = require("express");
const router = Router();
const login = require("./login");
const user = require("./user");
const isAuthenticated = require("../middlewares/isAuthenticated");

router.get("/", (req, res) => {
    res.render("index", {
        title: "Platzi",
    });
});

router.post("/gcsUpload", (req, res) => {
    console.log("gsc???");
});

router.use("/contacto", (req, res) => {
    res.render("user/contacto");
});

router.use("/ejemplo", (req, res) => {
    res.render("ejemplo");
});

router.use("/login", login);

router.use((req, res, next) => {
    isAuthenticated(req, res, next);
});

router.use("/home", user);

module.exports = router;
