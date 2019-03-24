var express = require('express')
var router = express.Router()

router.get('/',(req,res) => {
    console.log(req.path);
    if(!req.session.valid) res.send('INVALID SESSION')
    else res.send('AUTHORIZED SESSION')
    console.log(req.session)
    //res.send('Raiz da rota do ROTEIRO DO PRODUTO. ' + req.path);
})
module.exports = router
