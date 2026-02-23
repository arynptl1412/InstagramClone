import jsonwebtoken from 'jsonwebtoken';
import 'dotenv/config'

const jwt = jsonwebtoken;

async function identifyUser(req, res, next){
    const token = req.cookies.jwtToken;

    if(!token){
        return res.status(401).json({
            message: "Token not provided."
        })
    }

    let decoded = null;

    try{
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    }catch(err){
        return res.status(401).json({
            message: "Unauthorized Access"
        })
    }

    req.user = decoded;

    next();
}

export {identifyUser};