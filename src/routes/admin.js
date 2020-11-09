const { Router } = require("express");
const router = Router();
const isAdmin = require("../middlewares/isAdmin");
const {
    adminController,
    frequentQuestionController,
} = require("../controllers");
const { FrequentQuestions } = require("../repository/database").models;

router.use(isAdmin);

router.get("/", (req, res) => {
    res.render("admin/index");
});

router.get("/user-list", adminController.findNoSellers);

router.get("/make-seller/:id", adminController.makeSeller);

router.get("/frecuent-questions", async (req, res) => {
    const frequentQuestions = await frequentQuestionController.getFrequentQuestions();
    res.render("admin/questions", {
        frequentQuestions,
    });
});

router.post("/frecuent-questions", frequentQuestionController.createAQuestion);

router.get("/frecuent-questions/:id", async (req, res) => {
    const frequentQuestion = await FrequentQuestions.findByPk(req.params.id);
    res.json({
        status: true,
        frequentQuestion: frequentQuestion.dataValues,
    });
});

router.post(
    "/frecuent-questions/:id",
    frequentQuestionController.updateAQuestion
);

router.post(
    "/delete-frecuent-questions/:id",
    frequentQuestionController.deleteAQuestion
);

module.exports = router;
