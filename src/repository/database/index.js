const mongoose = require("mongoose");

module.exports = database = {
    connect() {
        mongoose.connect(
            process.env.URLDB,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
            (err, res) => {
                if (err) throw err;
                console.log("db conected");
            }
        );
        mongoose.set("useCreateIndex", true);
    },
};
