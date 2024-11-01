const {userIdGetter} = require('../services/authStorageService')

async function restrictToUserOnly(req,res,next){
const uid = req.cookies.uid

const user = userIdGetter(uid)
if(!user) return res.send('session id false')
console.log(user)
next()

}

module.exports = restrictToUserOnly
