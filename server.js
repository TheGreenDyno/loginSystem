const express = require('express')
const app = express()
const signupRouter = express.Router()
const connectToDB = require('./connection')

//parser
app.use(express.urlencoded({extended:true}))
//db connection..............
connectToDB('mongodb://127.0.0.1:27017/loginSystem')
    .then(()=>{
        console.log('db con success')
    })
    .catch((err)=>{
        console.log(err)
    })

//settting routes.............
const singupRoutes = require('./routes/signupRoutes')
const loginRoutes =require('./routes/loginRoutes')

//setting ejs as the view enigne
app.set('view engine', 'ejs')

//using routers........
app.use('/signup', singupRoutes)
app.use('/login', loginRoutes)

//root page(Homepage)
app.get('/', (req, res) => {
    res.send('this is home page')
})


app.listen('3000')//server on 3k