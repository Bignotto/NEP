var express = require('express')
var router = express.Router()

router.get('/',(req,res) => {
    console.log(req.path)
    console.log(req.session)
    res.send('Raiz da rota do ROTEIRO DO PRODUTO. ' + req.path)

});

router.post('/login/:id',(req,res) => {
    let id = req.params.id
    if(id==='thiago') {
        req.session.valid = true
        res.send('Logged!')
    }
    else {
        req.session.valid = false
        res.send('PERRRRRRRR')
    }
    console.log(req.session)
    console.log(req.session.id)
})

module.exports = router