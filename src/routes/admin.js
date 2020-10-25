const { Router } = require("express");
const router = Router();
const isAdmin = require("../middlewares/isAdmin");
const { userController } = require("../controllers");

router.use(isAdmin);

router.get("/", (req, res) => {
    res.render("admin/index");
});

router.get("/user-list", userController.findNoSellers);

module.exports = router;
