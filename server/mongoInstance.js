let axios = require('axios');
let store = require('../client/src/store');

let saveData = function(user){
  const url = 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Tehab?api_key=RGAPI-fa626e3d-ae50-4417-9b2f-1356cb642f11'
  const historyurl = 'https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/s2Azr-eutHxM8lZykEzcjxFwofgmgJA7rebBdHQN9dh5GQ?api_key=RGAPI-fa626e3d-ae50-4417-9b2f-1356cb642f11'
  
  axios.get(url)
  .then(function(data){
          var tehab = user(data.data);
          tehab.save(function (err, tehab) {
              if (err) return console.error(err);
            });
      });
}

let getAllUsers = function(model, callback){
  model.find(function (err, users) {
    if (err) {return callback("error " + err, null)};
    callback(null, users);
  })
}

let getUserData = function(user, model, callback){

  model.findOne({ name: user}, function(err,response){
    if(err){
      callback("error " + err, null);
    }
    callback(null, response);
  });
}

module.exports = {
  saveData : saveData,
  getUserData : getUserData,
  getAllUsers : getAllUsers
}