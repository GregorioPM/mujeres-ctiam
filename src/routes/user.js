const { Router } = require("express");
const router = Router();
const { uploadImage } = require("../client");

router.get("/", (req, res) => {
    const user = req.user;
    res.render("user/perfil", {
        user,
    });
});

router.post("/uploadImage", uploadImage);

module.exports = router;
