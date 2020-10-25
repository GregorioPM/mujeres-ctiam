const { Router } = require("express");
const router = Router();
const isAdmin = require("../middlewares/isAdmin");
const { adminController } = require("../controllers");

router.use(isAdmin);

router.get("/", (req, res) => {
    res.render("admin/index");
});

router.get("/user-list", adminController.findNoSellers);

router.get("/make-seller/:id", adminController.makeSeller);

module.exports = router;
