const express = require('express')
const session = require('express-session')
const path = require('path')

const _config = require('./config')
const user = require('./routes/user')
const logged = require('./routes/logged')

const app = express()

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(session({
    'secret':_config.hashSecret,
    'saveUninitialized':true,
    'resave':true,
    //cookie: { secure: true }
}))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/user',user)
app.use('/logged',logged)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(_config.port, () => console.log(`Example app listening on port ${_config.port}!`))