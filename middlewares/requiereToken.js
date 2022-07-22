import jwt from "jsonwebtoken"

export const requiereToken = (req, res, next) => {
    try {
        if (!req.headers?.authorization) throw { code: 401, message: "No existe token" }

        const token = req.headers.authorization.split(" ")[1]

        const { data } = jwt.verify(token, process.env.JWT_SECRET_TOKEN)

        req.uid = data.id

        next()

    } catch (error) {
        return res.status(error.code).json({ message: error.message })
    }
}