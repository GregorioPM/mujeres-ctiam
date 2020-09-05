const { Router } = require("express");
const passport = require("passport");
const router = Router();

router.post("/", (req, res) => {
    const { email, password } = req.body;
    userModel.findOne({ email: email }, (err, user) => {
        err &&
            res.json({
                status: "User not found",
            });
    });
});

router.post(
    "/signup",
    passport.authenticate("local-signup", {
        successRedirect: "/profile",
        failureRedirect: "/error",
        passReqToCallback: true,
    })
);

module.exports = router;
