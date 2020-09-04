require("../config");
const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const mongoose = require("./repository/database");
const morgan = require("morgan");
const path = require("path");
const router = require("./routes");

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
app.use(router);

app.listen(app.get("port"), () => {
    console.log(`listen on port ${app.get("port")}`);
});
