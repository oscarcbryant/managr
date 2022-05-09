import mongoose from 'mongoose';
const { Schema } = require('mongoose')


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
        type: Int,
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

const players = mongoose.model('players', playerSchema);

export default players; 