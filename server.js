const express = require('express')
const app = express()
const path = require('path')

app.use('/public', express.static(path.join(__dirname, '/public')))

app.get('/', function(req, res){
    var duongDanFile = path.join(__dirname, '')
    res.sendFile(duongDanFile)
})

app.listen(3000, function(){

})