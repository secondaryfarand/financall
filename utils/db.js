const mongoose = require('mongoose');
// import mongoose from 'mongoose';

// mongoose.connect('mongodb://127.0.0.1:27017/Financall');

const database = process.env.DB_URI ||'mongodb+srv://gambitmenteri8:FFAuV9IraKYa7bJu@financall.fuuev.mongodb.net/?retryWrites=true&w=majority&appName=Financall';



mongoose.connect(database, {
    useUnifiedTopology : True,
    useNewUrlParser : True,
});

mongoose.connection.on("connected", ()=> {
    console.log(`${database} connected...` );
});

// mongoose.connect('mongodb+srv://gambitmenteri8:FFAuV9IraKYa7bJu@financall.fuuev.mongodb.net/?retryWrites=true&w=majority&appName=Financall');

// mongodb+srv://gambitmenteri8:FFAuV9IraKYa7bJu@financall.fuuev.mongodb.net/?retryWrites=true&w=majority&appName=Financall



