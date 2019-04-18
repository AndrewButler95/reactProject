var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Andy:tehab95@riotapidatacluster-ze4ke.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });

const user = require('./models/user')(mongoose);