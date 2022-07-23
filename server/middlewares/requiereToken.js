import jwt from "jsonwebtoken"

export const requiereToken = (req, res, next) => {
    try {
        if (!req.headers?.authorization) throw { codeEr: 401, message: "No existe token" }

        const token = req.headers.authorization.split(" ")[1]

        const { data } = jwt.verify(token, process.env.JWT_SECRET_TOKEN)

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