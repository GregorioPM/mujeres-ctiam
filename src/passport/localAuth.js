const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../repository/schemas/User");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, done);
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
            const userDB = await User.findOne({ email });
            if (userDB) {
                return done(
                    null,
                    false,
                    req.flash("signupMessage", "The email is yet exits")
                );
            } else {
                const user = new User({
                    email,
                    name: req.body.name,
                    password: User.encryptPassword(password),
                });
                user.save(done);
            }
        }
    )
);
