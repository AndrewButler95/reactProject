module.exports = (mongoose) => {
    const user = mongoose.Schema({
        id: String,
        accountId: String,
        puuid: String,
        name: String,
        profileIconId: Number,
        revisionDate: Number,
        summonerLevel: Number
    });
  
    return mongoose.model('user', user);
  };