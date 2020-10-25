const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const { Admin, User } = require("../repository/database").models;

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findOne({
        where: {
            id,
        },
    });
    if (!user) {
        return done(null, false);
    }
    return done(null, user.dataValues);
});

passport.use(
    "local-signup",
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            const userDB = await User.findOne({
                where: {
                    email,
                },
            });
            if (userDB) {
                return done(
                    null,
                    false,
                    req.flash(
                        "signupMessage",
                        "El email ingresado ya está asociado a una cuenta."
                    )
                );
            } else {
                const {
                    dni,
                    firstName: nombres,
                    lastName: apellidos,
                    numberPhone: telefono,
                } = req.body;
                const user = await User.create({
                    nombres,
                    apellidos,
                    dni,
                    telefono,
                    email,
                    password: User.encryptPassword(password),
                });
                if (user) {
                    return done(null, user.dataValues);
                }
                return done(
                    null,
                    false,
                    req.flash(
                        "signupMessage",
                        "No ha sido posible crear la cuenta, error inesperado"
                    )
                );
            }
        }
    )
);

passport.use(
    "local-signin",
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            const user = await User.findOne({
                where: {
                    email,
                },
            });
            if (!user) {
                return done(
                    null,
                    false,
                    req.flash("signingMessage", "Usuario no encontrado")
                );
            }
            if (!user.comparePassword(password)) {
                return done(
                    null,
                    false,
                    req.flash(
                        "signingMessage",
                        "Correo o contraseña incorrectos"
                    )
                );
            }
            done(null, user.dataValues);
        }
    )
);

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_GOOGLE_ID,
            clientSecret: process.env.CLIENT_GOOGLE_SECRET,
            callbackURL: "http://localhost:4000/login/google/callback",
        },
        async (accessToken, refreshToken, profile, done) => {
            const profileJSON = profile._json;
            const { email } = profileJSON;
            if (email) {
                const user = await User.findOne({
                    where: {
                        email,
                    },
                });
                if (!user) {
                    return done(
                        null,
                        false,
                        req.flash(
                            "signingMessage",
                            "Este correo no está asociado a ninguna cuenta regitrada"
                        )
                    );
                }
                return done(null, user.dataValues);
            }
            return done(
                null,
                false,
                req.flash(
                    "signingMessage",
                    "No se ha podido acceder a tu correo de Google"
                )
            );
        }
    )
);

passport.use(
    "local-signin-admin",
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            const admin = await Admin.findOne({
                where: {
                    email,
                },
            });
            const { nombre_usuario } = req.body;
            if (!admin) {
                return done(
                    null,
                    false,
                    req.flash("signingMessage", "Administrador no encontrado")
                );
            }
            if (
                !admin.comparePassword(password) ||
                admin.nombre_usuario !== nombre_usuario
            ) {
                return done(
                    null,
                    false,
                    req.flash("signingMessage", "Administrador no encontrado")
                );
            }
            done(null, admin.dataValues);
        }
    )
);

passport.use(
    "local-signup-admin",
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            const adminDB = await Admin.findOne({
                where: {
                    email,
                },
            });
            if (adminDB) {
                return done(
                    null,
                    false,
                    req.flash(
                        "signupMessage",
                        "El email ingresado ya está asociado a una cuenta."
                    )
                );
            } else {
                const { nombre_usuario, key } = req.body;
                if (key === process.env.KEY_ADMIN) {
                    const admin = await Admin.create({
                        nombre_usuario,
                        email,
                        password: Admin.encryptPassword(password),
                    });
                    if (admin) {
                        return done(null, admin.dataValues);
                    }
                }
                return done(
                    null,
                    false,
                    req.flash("signupMessage", "Error al crear el usuario")
                );
            }
        }
    )
);
