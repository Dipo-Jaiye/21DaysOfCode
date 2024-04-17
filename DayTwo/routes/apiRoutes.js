const router = require("express").Router();

router.get("/api/:p", (req, res) => {
    return res.json({ "api": "running", "routeParameter": req.params["p"] });
});

router.get("/api", (req, res) => {
    return res.json({ "api": "running", "routeParamExists": false });
});

module.exports = router;