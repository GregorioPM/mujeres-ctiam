const { Router } = require("express");
const router = Router();

router.post("/", (req, res) => {
    res.json({
        status: true,
    });
});

module.exports = router;
