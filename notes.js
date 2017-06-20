console.log("Starting notes.js");

const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title, //ES6 allows one word if both key value pairs are same
        body
    };

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch(e){

    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0){
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
};

var getAll = () => {
    console.log('Getting all notes');
}

var getNote = (title) => {
    console.log('Getting note', title);
};

var removeNote = (title) => {
    console.log('Removing note', title);
};

module.exports = {
    addNote, //addNote: addNote <-- similar
    getAll,
    getNote,
    removeNote
}
