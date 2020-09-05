const { Router } = require("express");
const router = Router();
const index = require("./login");

router.get("/", (req, res) => {
    res.render("index", {
        title: "Home",
    });
});

router.get("/profile", (req, res) => {
    res.json({
        status: true,
    });
});
router.use("/login", index);

module.exports = router;
