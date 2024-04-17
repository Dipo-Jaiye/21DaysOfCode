const router = require("express").Router();
const { addRouteParam, } = require("../middleware");

router.get("/api/:p", addRouteParam, (req, res) => {
    return res.json({ "api": "running", "routeParameters": req.params });
});

router.get("/api", (req, res) => {
    return res.json({ "api": "running", "routeParamExists": false });
});

module.exports = router;