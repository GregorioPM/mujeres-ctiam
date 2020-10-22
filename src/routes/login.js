const { Router } = require("express");
const passport = require("passport");
const router = Router();
const { Admin } = require("../repository/database").models;

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

router.get("/admin", (req, res) => {
    res.render("admin/login");
});

router.post("/admin", async (req, res) => {
    const { nombre_usuario, email, password } = req.body;
    const admin = await Admin.findOne({
        where: {
            nombre_usuario,
            email,
        },
    });
    if (admin.comparePassword(password)) {
        res.send(admin);
    }
});

router.post("/signup-admin", async (req, res) => {
    const { nombre_usuario, email, password, key } = req.body;
    if (key === process.env.KEY_ADMIN) {
        const admin = await Admin.create({
            nombre_usuario,
            email,
            password: Admin.encryptPassword(password),
        });
        if (admin) {
            return res.render("admin/login", {
                status: "Administrador registrado correctamente",
            });
        }
        return res.render("admin/login", {
            status: "No ha sido posible el registro, error interno",
        });
    } else {
        return res.render("admin/login", {
            status: "Key inválida",
        });
    }
});

module.exports = router;
