import jwt from 'jsonwebtoken'
export const generateRefreshToken = (data) => {

    try {
        const expiresIn = 60 * 60 * 24
        const refreshToken = jwt.sign({ data }, process.env.JWT_SECRET_REFRESHTOKEN, { expiresIn })

        return refreshToken



    } catch (error) {
        console.log(error);
    }
}