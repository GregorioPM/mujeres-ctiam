const { Router } = require("express");
const passport = require("passport");
const router = Router();

router.get("/", (req, res) => {
    res.render("index", {
        modal: true,
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

router.post(
    "/signin",
    passport.authenticate("local-signin", {
        successRedirect: "/profile",
        failureRedirect: "/error",
        passReqToCallback: true,
    })
);

module.exports = router;
