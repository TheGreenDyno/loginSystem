const User = require('../modules/userModule')

function displayLogin(req, res) {
    res.render('login')
}
async function handleLogin(req,res){
    const userInfo= req.body
     try{
        const userData = await User.findOne({
            username: userInfo.username
        })
    
        if(!userData) return res.send('User doesnt exist')
        if(userData.password !== userInfo.password) return res.send('password did not match')
        res.redirect('/')
     }
     catch(err){
        res.send(err)
     }
}


module.exports = { displayLogin, handleLogin }