import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import nodemon from 'nodemon';
import playerRoutes from './routes/players.js';

app.use('./players', playerRoutes);

const app = express();

app.use(bodyParser.json({ limit: "20mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }))

//may need to change to:
// app.express.urlencoded app.use(express.urlencoded({ extended: false }));
//app.use(express.json());


app.use(cors()); 

const CONNECTION_URL = "mongodb+srv://oscarbuildsapps:oscar1810@cluster0.4wocq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true 
}).then(() => app.listen(PORT, () => 
    console.log(`Connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message));

module.exports = mongoose.connection;



