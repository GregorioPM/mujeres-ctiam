const { Router } = require("express");
const router = Router();
const userModel = require("../repository/schemas/User");

router.post("/", (req, res) => {
    const { email, password } = req.body;
    userModel.findOne({ email: email }, (err, user) => {
        if (err)
            res.json({
                status: "User not found",
            });
    });
});

router.post("/register", async (req, res) => {
    const { email, name, password } = req.body;
    const user = userModel({ email, name, password });
    user.save((err) => {
        if (err)
            res.json({
                status: false,
            });
        res.json({
            status: true,
        });
    });
});

module.exports = router;
