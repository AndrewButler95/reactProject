const express = require('express')
const app = express()
const port = 5000
const mongoInstance = require('./mongoInstance.js')
const request = require('request');
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

app.get('/getUserHistory', function(req, res) {
    request('https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/s2Azr-eutHxM8lZykEzcjxFwofgmgJA7rebBdHQN9dh5GQ?api_key=RGAPI-5506f6d2-b769-463d-84d6-39fded8c3af1', function(err,resp){
        res.send(resp)
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))