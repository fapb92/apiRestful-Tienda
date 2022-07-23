import jwt from "jsonwebtoken"

export const requiereRefreshToken = (req, res, next) => {
    try {
        let refToken = req.headers?.authorization
        if (!refToken) throw { codeEr: 401, message: "No existe token" }

        refToken = refToken.split(" ")[1]

        const { data } = jwt.verify(refToken, process.env.JWT_SECRET_REFRESHTOKEN)

        req.uid = data.id
        req.rol = data.rol

        next()

    } catch (error) {
        if (error?.codeEr) {
            return res.status(error.codeEr).json({ message: error.message })
        }
        return res.status(400).json({ message: error.message })
    }
}