//dependencies
const express = require ('express');
const fs = require ('fs');
const path = require ('path');

//To initiate the server
const app = express();
const PORT = process.env.PORT || 3003;

// Use express'js middle middleware function to get access CSS and JS file
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({extended: true}));
// parse incoming JSON data
app.use(express.json());

















app.listen (PORT, () => {
    console.log (`API server on port ${PORT}!`);
});