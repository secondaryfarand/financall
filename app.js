const express = require('express');
const expressLayouts = require('express-ejs-layouts');
// import express from 'express';
// import expressLayouts from 'express-ejs-layouts';

// Databases
require('./utils/db')
const Expenses = require('./model/data')
// import 'utils/db';
// import { Expenses } from './model/data/Expenses'; 

// Porting
const app = express();
const port = 3000; 

// Setup view engine EJS
app.set('view engine', 'ejs');
app.use(expressLayouts) 
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Halaman Home
app.get('/', (req, res) => {
    const mahasiswa = [
        {
            nama : 'abdul',
            kelas : 'satu'
        },
        {
            nama : 'aziz',
            kelas : 'empat'
        },
        {
            nama : 'amir',
            kelas : 'enam'
        },
    ]; 
    res.render('index.ejs', {
        nama : 'Farand Darmika',
        title : 'Financall',
        mahasiswa, 
        layout : 'layouts/main-layout'
    })
});

// halaman pengeluaran
app.get('/expenses' , async (req, res) => {
    const expenses = await Expenses.find()
    const category = {
        category1 : "Jenis Pengeluaran",
        category2 : "Nilai",
        category3 : "Tanggal",
        category4 : "Estimasi"
    }
    res.render('expenses', { 
        layout : 'layouts/main-layout',
        title : 'Halaman Contact',
        expenses,
        category
        // msg: req.flash('msg'),
      })
    // console.log(expenses)
})
 
app.post(
    '/expenses' ,(req, res) => {
        // console.log(req.body);
        // res.send(req.body);
        Expenses.insertMany(req.body)
        console.log('okayyyy')
        res.redirect('/expenses');
    }
)

app.listen(port, () => {
    console.log(`Financall | Listening at http://localhost:${port}`)
    console.log(`hey`)
});
  