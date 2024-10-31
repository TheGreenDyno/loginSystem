const User = require('../modules/userModule')//module import
const { setUser } = require('../auth')
function displaySignupPage(req, res) {
    res.render('signup')
}

async function handleUserSignup(req, res) {
    const userInfo = req.body

    try {
        const userData = await User.create({
            username: userInfo.username,
            password: await setUser(userInfo.password)
        })
        console.log(`user creation successful. Data: ${userData}`)
        return res.render('login')
    }
    catch (err) {
        console.log(err)
        if (err.code === 11000) return res.send('User Already exists')
        return res.send('error creating user! Try Again....')
    }
}


module.exports = { displaySignupPage, handleUserSignup }