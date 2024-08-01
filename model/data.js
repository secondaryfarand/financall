const mongoose = require('mongoose');
// import mongoose from 'mongoose';

// Membuat Schema 
const Expenses = mongoose.model('Expenses', {
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

module.exports = Expenses;