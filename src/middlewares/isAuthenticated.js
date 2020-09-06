module.exports = (req, res, next) => {
    if (req.isAuthenticated()) {
        console.log("is authenticated");
        return next();
    }
    res.redirect("/login");
};
