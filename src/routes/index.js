const { Router } = require("express");
const login = require("./login");
const isAuthenticated = require("../middlewares/isAuthenticated");
const nodeMailer = require("../services/nodemailer");
const router = Router();
const user = require("./user");

router.get("/", (req, res) => {
    res.render("index", {
        title: "Tienda CTIAM",
        isAuthenticated: req.user != undefined,
    });
});

router.get("/contact", (req, res) => {
    res.render("contact", {
        title: "Contacto | Mujeres CTIAM",
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
    });
});

router.get("/perfil_new", (req, res) => {
    res.render("perfil_new", {
        title: "Perfil Tienda | Mujeres CTIAM",
    });
});

router.get("/favoritos", (req, res) => {
    res.render("favoritos", {
        title: "Favoritos | Mujeres CTIAM",
    });
});

router.get("/eliminar-producto", (req, res) => {
    res.render("eliminar-producto", {
        title: "Eliminar producto | Mujeres CTIAM",
    });
})

router.get("/carrito", (req, res) => {
    res.render("carrito", {
        title: "Carrito | Mujeres CTIAM",
    });
})

router.get("/reportes", (req, res) => {
    res.render("reportes", {
        title: "Reportes | Mujeres CTIAM",
    });
})

router.get("/reg_product", (req, res) => {
    res.render("reg_product", {
        title: "Registrarproducto | Mujeres CTIAM",
    });
});

router.get("/profile-store", (req, res) => {
    res.render("profile-store", {
        title: "Perfil tienda | Mujeres CTIAM",
    });
});

router.get("/view-product", (req, res) => {
    res.render("view-product", {
        title: "Vista producto | Mujeres CTIAM",
    });
});

router.get("/store", (req, res) => {
    res.render("store", {
        title: "Tiendas | Mujeres CTIAM",
    });
});

router.get("/questions", (req, res) => {
    res.render("questions", {
        title: "Preguntas frecuentes | Mujeres CTIAM",
    });
});

router.get("/list-product", (req, res) => {
    res.render("list-product", {
        title: "Lista productos | Mujeres CTIAM",
    });
});

router.use("/login", login);

router.use((req, res, next) => {
    isAuthenticated(req, res, next);
});

router.use("/home", user);

module.exports = router;
