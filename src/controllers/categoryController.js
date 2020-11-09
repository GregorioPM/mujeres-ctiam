const { Category } = require("../repository/database").models;

module.exports = {
    getCategorys: async () => {
        return await Category.findAll();
    },
    createACategory: async (req, res) => {
        const { nombre, descripcion } = req.body;
        const categorys = await Category.create({
            nombre,
            descripcion,
        });
        if (categorys) {
            res.redirect("/admin/categorys");
        }
        res.redirect("/admin/categorys");
    },
    updateACategory: async (req, res) => {
        const categoryDB = await Category.findByPk(req.params.id);
        const category = req.body;
        for (field in category) {
            categoryDB[field] = category[field];
        }
        await categoryDB.save();
        res.redirect("/admin/categorys");
    },
    deleteACategory: async (req, res) => {
        const category = await Category.findByPk(req.params.id);
        if (category) {
            category.destroy();
            return res.redirect("/admin/categorys");
        }
        return res.redirect("/admin/categorys");
    },
};
