const { Router } = require("express");
const router = Router();
const { User } = require("../repository/database").models;
router.get("/", (req, res) => {
    res.redirect("/user/home");
});

router.get("/home", (req, res) => {
    const user = req.user;
    console.log(user);
    res.render("user/perfil", {
        title: "Perfil | Mujeres CTIAM",
        user,
    });
});

router.post("/update", async (req, res) => {
    const user = req.body;
    let userDB = await User.findOne({
        where: {
            id: req.user.id,
        },
    });
    for (field in user) {
        userDB[field] = user[field];
    }
    await userDB.save();
    res.redirect("/user/home");
});

module.exports = router;
