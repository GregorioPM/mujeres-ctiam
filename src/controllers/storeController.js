const { Store } = require("../repository/database").models;

module.exports = {
    updateAStore: async (req, res) => {
        const store = req.body;
        let storeDB = await Store.findByPk(req.user.id);
        if (store) {
            for (field in store) {
                storeDB[field] = store[field];
            }
            await storeDB.save();
            return res.redirect("/seller/store");
        }
        return res.redirect("/seller/store");
    },
};
