const User = require('../modules/userModule')
const { getUser } = require('../auth')
const { get } = require('mongoose')
function displayLogin(req, res) {
    res.render('login')
}
async function handleLogin(req, res) {
    const userInfo = req.body
    try {
        const userData = await User.findOne({
            username: userInfo.username
        })
        console.log(userData)
        if (!userData) return res.send('User doesnt exist')
        const passsword = await getUser(userInfo.password, userData.password)
        if (passsword == false) return res.send('password is not correct')
        return res.redirect('/')



    }
    catch (err) {
        res.send(err)
    }
}


module.exports = { displayLogin, handleLogin }