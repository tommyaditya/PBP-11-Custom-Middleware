const auth = (req, res, next) => {
    const { user } = req.headers;
    if (!user || user !== 'admin') {
        return res.status(403).json({ error: "Unauthorized: Only admin can delete data." });
    }
    next();
};

module.exports = auth;
