let axios = require('axios');
let user = require('./models/user.js');

const url = 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Tehab?api_key=RGAPI-05109367-52e6-4164-916d-4bd51f942213'
const historyurl = 'https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/s2Azr-eutHxM8lZykEzcjxFwofgmgJA7rebBdHQN9dh5GQ?api_key=RGAPI-05109367-52e6-4164-916d-4bd51f942213'

axios.get(url)
.then(function(data){
        var tehab = user(data.data);
        tehab.save(function (err, tehab) {
            if (err) return console.error(err);
          });
    });