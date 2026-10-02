import jwt from 'jsonwebtoken'

export function authenticate(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(404).json({ message: "Token not found" })
    }
    try {
        const verified = jwt.verify(token, 'secretkey')
        req.user = verified
        next()
    } catch (err) {
        return res.status(403).json({ message: "Invalid token" })
    }
}

export function authorize(...roles) {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Access denied" })
        }
        next()
    }
}