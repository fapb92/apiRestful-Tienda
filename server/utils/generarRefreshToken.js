import jwt from 'jsonwebtoken'
export const generateRefreshToken = (data, res) => {

    try {
        const expiresIn = 60 * 60 * 24
        const refreshToken = jwt.sign({ data }, process.env.JWT_SECRET_REFRESHTOKEN, { expiresIn })

        res.cookie('refresh_token', `Bearer ${refreshToken}`, {
            expires: new Date(Date.now() + expiresIn * 1000),
            httpOnly: true
        })


    } catch (error) {
        console.log(error);
    }
}