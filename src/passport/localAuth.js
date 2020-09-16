const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github").Strategy;
const passport = require("passport");
const User = require("../repository/schemas/User");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, done).select("-password").lean(true);
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

passport.use(
    "local-signin",
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            const user = await User.findOne({ email });
            if (!user) {
                return done(
                    null,
                    false,
                    req.flash("signingMessage", "No user found")
                );
            }
            if (!user.comparePassword(password)) {
                return done(
                    null,
                    false,
                    req.flash("signingMessage", "Email or password incorrect")
                );
            }
            done(null, user);
        }
    )
);

passport.use(
    "github",
    new GitHubStrategy(
        {
            clientID: process.env.CLIENT_GITHUB_ID,
            clientSecret: process.env.CLIENT_GITHUB_SECRET,
            callbackURL: "http://localhost:4000/login/github/callback",
        },
        async (accessToken, refreshToken, profile, done) => {
            const profileJSON = JSON.parse(profile._raw);
            const { email } = profileJSON;
            if (email) {
                const user = await User.findOne({ email });
                if (!user) {
                    return done(null, false);
                }
                return done(null, user);
            }
            return done(null, false);
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
                const user = await User.findOne({ email });
                if (!user) {
                    return done(null, false);
                }
                return done(null, user);
            }
            return done(null, false);
        }
    )
);
