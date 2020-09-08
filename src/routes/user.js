const { Router } = require("express");
const router = Router();
const { uploadImage } = require("../client");
var BusBoy = require("busboy");
const os = require("os");
const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
    const user = req.user;
    res.render("user/perfil", {
        user,
    });
});

router.post("/uploadImage", (req, res, next) => {});

module.exports = router;
