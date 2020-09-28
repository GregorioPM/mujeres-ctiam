const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
    const user = req.user;
    console.log(user);
    res.render("user/perfil", {
        title: "Perfil | Mujeres CTIAM",
        user,
    });
});

module.exports = router;
