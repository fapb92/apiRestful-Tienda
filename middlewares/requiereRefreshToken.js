import jwt from "jsonwebtoken"

export const requiereRefreshToken = (req, res, next) => {
    try {
        let refToken = req.cookies?.refresh_token
        if (!refToken) throw { code: 401, message: "No existe token" }

        refToken = refToken.split(" ")[1]

        const { data } = jwt.verify(refToken, process.env.JWT_SECRET_REFRESHTOKEN)

        console.log(data);
        req.uid = data.id

        next()

    } catch (error) {
        console.log(error);
        return res.status(error.code).json({ message: error.message })
    }
}