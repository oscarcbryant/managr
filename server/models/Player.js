const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        },
        
    surname: {
        type: String,
        required: true,
        trim: true,
        },       

    age: {
        type: Number,
        required: true,
        trim: true,
        },

    email: {
        type: String,
        required: true,
        trim: true
    },

    position: {
        type: String,
        required: false, 
    }
});

const Player = mongoose.model('Player', playerSchema);

module.export = Player; 