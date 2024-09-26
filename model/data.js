const mongoose = require('mongoose');
// import mongoose from 'mongoose';

// Membuat Schema 
// const Expenses = mongoose.model('Expenses', {
//     jenis: {
//         type: String,
//         required: true,
//     },
//     nilai: {
//         type: Number,
//         required: true,
//     },
//     tanggal: {
//         type: String,
//     },
// }); 

// module.exports = Expenses;


// Membuat Schema versi Atlas
const modelExpenses = new mongoose.Schema({
    jenis: {
             type: String,
            required: true,
            },         

    nilai: {
            type: Number,           
            required: true,
            },

    tanggal: {
            type: String,
            },
});


const Expenses = mongoose.model('Expenses', modelExpenses);

module.exports = Expenses;
