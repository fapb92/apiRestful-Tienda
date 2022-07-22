export const requiereRol = (req, res, next) => {
    try {
        console.log(req.rol);
        if (req.rol !== "admin") throw { codeEr: 401, message: "Acceso no autorizado" }
        next()
    } catch (error) {
        if (error?.codeEr) {
            return res.status(error.codeEr).json({ message: error.message })
        }
        return res.status(400).json({ message: error.message })
    }
}