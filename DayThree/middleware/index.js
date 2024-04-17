module.exports = {
    addQueryParam: (req, res, next) => {
        req.query["queryMiddleware"] = "working";
        next();
    },

    addRouteParam: (req, res, next) => {
        req.params["paramMiddleware"] = "working";
        next();
    },
};