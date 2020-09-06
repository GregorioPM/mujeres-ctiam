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
        successRedirect: "/home",
        failureRedirect: "/login",
        passReqToCallback: true,
    })
);

router.post(
    "/signin",
    passport.authenticate("local-signin", {
        successRedirect: "/home",
        failureRedirect: "/login",
        passReqToCallback: true,
    })
);

router.get("/logout", (req, res, next) => {
    req.logOut();
    res.redirect("/");
});

module.exports = router;
