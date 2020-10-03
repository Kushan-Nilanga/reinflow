const jwt = require('jsonwebtoken')

module.exports = function (req, res, next, level) {
    const token = req.header('Authorization');
    console.log(token)
    if (!token) {
        console.log("rejected-invalid-token")
        return res.status(401).json({ "route-access": false, "message": "invalid token" })
    }

    try {
        const verified = jwt.verify(token, process.env.SECRET_TOKEN)
        req.user = verified
        res.status(200)
        if (req.user.access > level) {
            console.log("no access")
            return res.status(400).json({ "route-access": false, "token-status": "valid", "message": "insufficient access rights" })
        }
        next();
    } catch (err) {
        res.status(400).json({ "route-access": false, "token-status": "invalid" })
        console.log("rejected-invalid-token")
    }
}