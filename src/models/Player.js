const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    nick: String,
    score: Number,
    ranking: Number,
});

const modelName = 'Player';

if(mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connection.models[modelName];
} else{
    module.exports = mongoose.model(modelName, modelSchema);
}