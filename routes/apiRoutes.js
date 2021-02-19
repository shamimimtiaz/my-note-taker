const fs = require('fs');
const path = require('path');



module.exports = function(app) {
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if(err) throw err;
        let notes = JSON.parse(data);

// setup get route and return all the save notes as JSON
app.get('api/notes', (req, res) => {
    res.json(notes);
});

// setup post route and add all the notes to db.json and then return the new note
app.post('api/notes', (req, res) => {
    let addNote = req.body;
    notes.push(addNote);
    updateNote();
    return console.log ('Added note: ', addNote.title);
});

// Return note by specific ID
app.get ('api.notes/:id', (req, res) =>{
    const result = findById(req.params.id, notes);
        res.json(result);
});

// Delete note by specif ID
app.delete('api.notes/:id', (req, res) => {
    notes.splice(req.params.id, 1);
    updateNote();
    console.log('Deleted note: ' + req.params.id);
});

//Update json file either add or delete a note
function updateNote() {
    fs.writeFile(
        path.join(__dirname, 'db/db.json'),
        JSON.stringify(notes),
        err => {
            if (err) throw err;
            return true;
            });
        }
    });
}