const fs = require('fs');
var path = require("path");


module.exports = function(app) {
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '/public/notes.html'));    
    });
    
    // route to connect index.html
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/public/index.html"));
        });
};