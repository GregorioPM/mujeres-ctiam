require("../config");
const express = require("express");
const app = express();
const flash = require("connect-flash");
const hbs = require("express-handlebars");
const mongoose = require("./repository/database");
const morgan = require("morgan");
const passport = require("passport");
const path = require("path");
const session = require("express-session");
const router = require("./routes");

require("./passport/localAuth");

app.engine(
    "hbs",
    hbs({
        extname: "hbs",
        defaultLayout: "layout",
        layoutsDir: path.join(__dirname, "/views", "/layouts"),
    })
);

app.set("port", process.env.PORT);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

mongoose.connect();
app.use(morgan(process.env.NODE_ENV));
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(express.static(path.join(__dirname, "public")));
app.use(
    session({
        secret: process.env.SECRET_SESSION,
        resave: false,
        saveUninitialized: false,
    })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(router);
app.use((req, res, next) => {
    app.locals.signupMessage = req.flash("signupMessage");
    next();
});

app.listen(app.get("port"), () => {
    console.log(`listen on port ${app.get("port")}`);
});
