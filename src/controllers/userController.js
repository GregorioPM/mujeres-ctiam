const { User } = require("../repository/database").models;

const userController = (module.exports = {
    updateAUser: async (req, res) => {
        const user = req.body;
        let userDB = await User.findOne({
            where: {
                id: req.user.id,
            },
        });
        for (field in user) {
            userDB[field] = user[field];
        }
        await userDB.save();
        res.redirect("/user/home");
    },
    getFavorites: async(req, res) => {
        const favorites = await User.findFavorites(req.user.id)
        // res.render('user/favoritos',favorites);
        res.send(favorites);
    }
});