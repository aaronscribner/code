// hello.js
module.exports = (req, res, next) => {
    if (req.url.includes('logging/')) {
        res.sendStatus(200);
    }
    else {
        next();
    }
}