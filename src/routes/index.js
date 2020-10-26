const { Router } = require("express");
const login = require("./login");
const isAuthenticated = require("../middlewares/isAuthenticated");
const nodeMailer = require("../services/nodemailer");
const router = Router();
const user = require("./user");
const admin = require("./admin");

router.get("/", (req, res) => {
    res.render("index", {
        title: "Tienda CTIAM",
        user: req.user,
        isAuthenticated: req.user != undefined,
    });
});

router.get("/contact", (req, res) => {
    res.render("contact", {
        title: "Contacto | Mujeres CTIAM",
        isAuthenticated: req.user != undefined,
    });
});

router.post("/contact", (req, res) => {
    const { name, numberPhone, email, message } = req.body;
    nodeMailer(name, email, (err) => {
        if (err) console.log(err);
        res.render("contact", {
            status: err ? false : true,
        });
    });
});

router.get("/list", (req, res) => {
    res.render("list", {
        title: "Lista | Mujeres CTIAM",
        isAuthenticated: req.user != undefined,
    });
});

router.get("/perfil_new", (req, res) => {
    res.render("perfil_new", {
        title: "Perfil Tienda | Mujeres CTIAM",
        isAuthenticated: req.user != undefined,
    });
});

router.get("/favoritos", (req, res) => {
    res.render("favoritos", {
        title: "Favoritos | Mujeres CTIAM",
        isAuthenticated: req.user != undefined,
    });
});

router.get("/eliminar-producto", (req, res) => {
    res.render("eliminar-producto", {
        title: "Eliminar producto | Mujeres CTIAM",
        isAuthenticated: req.user != undefined,
    });
});

router.get("/carrito", (req, res) => {
    res.render("carrito", {
        title: "Carrito | Mujeres CTIAM",
        isAuthenticated: req.user != undefined,
    });
});

router.get("/reportes", (req, res) => {
    res.render("reportes", {
        title: "Reportes | Mujeres CTIAM",
        isAuthenticated: req.user != undefined,
    });
});

router.get("/preguntas-vendedor", (req, res) => {
    res.render("preguntas-vendedor", {
        title: "Preguntas vendedor | Mujeres CTIAM",
        isAuthenticated: req.user != undefined,
    });
});

router.get("/reg_product", (req, res) => {
    res.render("reg_product", {
        title: "Registrar producto | Mujeres CTIAM",
        isAuthenticated: req.user != undefined,
    });
});

router.get("/password", (req, res) => {
    res.render("password", {
        title: "Cambiar contraseña | Mujeres CTIAM",
        isAuthenticated: req.user != undefined,
    });
});

router.get("/compras_usuario", (req, res) => {
    res.render("compras_usuario", {
        title: "Mis compras | Mujeres CTIAM",
        isAuthenticated: req.user != undefined,
    });
});

router.get("/mis-preguntas", (req, res) => {
    res.render("mis-preguntas", {
        title: "Mis preguntas | Mujeres CTIAM",
        isAuthenticated: req.user != undefined,
    });
});

router.get("/profile-store", (req, res) => {
    res.render("profile-store", {
        title: "Perfil tienda | Mujeres CTIAM",
        isAuthenticated: req.user != undefined,
    });
});

router.get("/view-product", (req, res) => {
    res.render("view-product", {
        title: "Vista producto | Mujeres CTIAM",
        isAuthenticated: req.user != undefined,
    });
});

router.get("/store", (req, res) => {
    res.render("store", {
        title: "Tiendas | Mujeres CTIAM",
        isAuthenticated: req.user != undefined,
    });
});

router.get("/questions", (req, res) => {
    res.render("questions", {
        title: "Preguntas frecuentes | Mujeres CTIAM",
        isAuthenticated: req.user != undefined,
    });
});

router.get("/list-product", (req, res) => {
    res.render("list-product", {
        title: "Lista productos | Mujeres CTIAM",
        isAuthenticated: req.user != undefined,
    });
});

router.use("/login", login);

router.use("/admin", admin);

router.use((req, res, next) => {
    isAuthenticated(req, res, next);
});

router.use("/user", user);

module.exports = router;
