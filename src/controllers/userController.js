const { User } = require("../repository/database").models;

const userController = (module.exports = {
    findNoSellers: async (req, res) => {
        const users = await User.findNoSellers();
        res.render("admin/list-users", {
            users,
        });
    },
});
