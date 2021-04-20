const { json } = require("body-parser");
const jwt = require("jsonwebtoken");
let { Forbidden, unauthorized } = require("./httpStatusCode.json");
const { infoLogger } = require("./logger");
let response = {}


const tokenGeneration = (payload, next) => {
    let token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '441hr' })
    response.token = token
    infoLogger.info(JSON.stringify(response));
    return token;
}


const tokenVerify = (req, res, next) => {
    var token = req.header('token') || req.params.token;
    // console.log('token : ', token)

    let verification_msg = {
        "message": "Unauthorized user"
    }

    jwt.verify(token, process.env.TOKEN_SECRET, function(err, decodeData) {
        if (err) {
            console.log('Incorrect token or token expired')
            return res.status(401).send(verification_msg);
        } else if (decodeData) {
            req.decoded = decodeData;
            // console.log('decoded data : ', req.decoded);
            // console.log('Token matched')
            next();
        }
    })

}


module.exports = { tokenGeneration, tokenVerify }


/***
 *     try {
        let token = req.header('token') || req.params.token;
        if (token) {
            jwt.verify(token, process.env.TOKEN_SECRET, (error, data) => {
                if (error) {
                    return res.send({
                        success: false,
                        message: 'Token is not valid'
                    });
                } else {
                    req.decoded = data;
                    next();
                }
            });
        } else {
            logger.error('No token provided...')
            return res.send({

                success: false,
                message: 'No token provided.'
            });
        }
    } catch (error) {
        next(error);
    }
 */