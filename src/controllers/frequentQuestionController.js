const { FrequentQuestions } = require("../repository/database").models;

module.exports = {
    createAQuestion: async (req, res) => {
        const { pregunta, respuesta } = req.body;
        const frequentQuestions = await FrequentQuestions.create({
            pregunta,
            respuesta,
        });
        if (frequentQuestions) {
            res.redirect("/admin/frecuent-questions");
        }
        res.redirect("/admin/frecuent-questions");
    },
    updateAQuestion: async (req, res) => {
        const questionDB = await FrequentQuestions.findByPk(req.params.id);
        const question = req.body;
        for (field in question) {
            questionDB[field] = question[field];
        }
        await questionDB.save();
        res.redirect("/admin/frecuent-questions");
    },
    deleteAQuestion: async (req, res) => {
        const question = await FrequentQuestions.findByPk(req.params.id);
        if (question) {
            question.destroy();
            return res.redirect("/admin/frecuent-questions");
        }
        return res.redirect("/admin/frecuent-questions");
    },
};
