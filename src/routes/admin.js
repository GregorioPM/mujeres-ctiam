const { Router } = require("express");
const router = Router();
const isAdmin = require("../middlewares/isAdmin");
const {
    adminController,
    frequentQuestionController,
    categoryController,
} = require("../controllers");
const { FrequentQuestions } = require("../repository/database").models;
const { Category } = require("../repository/database").models;


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


router.get("/categorys", async (req, res) => {
    const categorys = await categoryController.getCategorys();
    res.render("admin/categorys", {
        categorys,
    });
});

router.post("/frecuent-questions", frequentQuestionController.createAQuestion);

router.post("/categorys", categoryController.createACategory);


router.get("/frecuent-questions/:id", async (req, res) => {
    const frequentQuestion = await FrequentQuestions.findByPk(req.params.id);
    res.json({
        status: true,
        frequentQuestion: frequentQuestion.dataValues,
    });
});

router.get("/categorys/:id", async (req, res) => {
    const category = await Category.findByPk(req.params.id);
    res.json({
        status: true,
        category: category.dataValues,
    });
});

router.post(
    "/frecuent-questions/:id",
    frequentQuestionController.updateAQuestion
);

router.post(
    "/categorys/:id",
    categoryController.updateACategory
);

router.post(
    "/delete-frecuent-questions/:id",
    frequentQuestionController.deleteAQuestion
);

router.post(
    "/delete-categorys/:id",
    categoryController.deleteACategory
);

module.exports = router;
