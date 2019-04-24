const express = require('express')
const app = express()
const port = 5000
const mongoInstance = require('./mongoInstance.js')
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Andy:tehab95@riotapidatacluster-ze4ke.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });
const user = require('./models/user')(mongoose)

app.get('/getUserInfo', function(req, res) {
    mongoInstance.getUserData('Teh AB', user, function(err, resp){
        res.send(resp)
    })

})

app.get('/getAllUsers', function(req, res) {
    mongoInstance.getAllUsers(user, function(err, resp){
        res.send(resp)
    })

})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))