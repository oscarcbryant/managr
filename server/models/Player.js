// const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const playerSchema = new Schema({
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

const Player = model('Player', playerSchema);

module.exports = Player; 