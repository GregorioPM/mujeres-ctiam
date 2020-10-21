const { Router } = require("express");
const passport = require("passport");
const router = Router();

router.get("/", (req, res) => {
    res.render("index", {
        title: "Iniciar sesión | Mujeres CTIAM",
        modal: true,
    });
});

router.get("/signup", (req, res) => {
    res.render("user/register");
});

router.post(
    "/signup",
    passport.authenticate("local-signup", {
        successRedirect: "/user",
        failureRedirect: "/login",
        passReqToCallback: true,
    })
);

router.post(
    "/signin",
    passport.authenticate("local-signin", {
        successRedirect: "/user",
        failureRedirect: "/login",
        passReqToCallback: true,
    })
);

router.get(
    "/signin/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: "/user",
        failureRedirect: "/login",
        passReqToCallback: true,
    })
);

router.get("/logout", (req, res, next) => {
    req.logOut();
    res.redirect("/");
});

module.exports = router;
