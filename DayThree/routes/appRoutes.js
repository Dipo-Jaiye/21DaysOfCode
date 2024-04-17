const router = require("express").Router();
const { addQueryParam, } = require("../middleware");

router.get("/", addQueryParam, (req, res) => {
    if (Object.keys(req.query).length > 0){
        return res.end(`app is running, and the query params are ${JSON.stringify(req.query)}`);
    }
    return res.end("app is running, no query params supplied");
});

module.exports = router;