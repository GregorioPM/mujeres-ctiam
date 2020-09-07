const { Router } = require("express");
const router = Router();
const { uploadImage } = require("../client");
const multer = require("multer");
const uploader = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
});
router.get("/", (req, res) => {
    const user = req.user;
    res.render("user/perfil", {
        user,
    });
});

router.post("/uploadImage", uploader.single("image"), uploadImage);

module.exports = router;
