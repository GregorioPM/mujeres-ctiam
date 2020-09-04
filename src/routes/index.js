const { Router } = require("express");
const router = Router();
const index = require("./login");

router.get("/", (req, res) => {
    res.redirect("/home");
});
router.use("/login", index);

module.exports = router;
