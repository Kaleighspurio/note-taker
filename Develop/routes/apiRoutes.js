// require express
const router = require('express').Router();
// require the class file notbooks so you can use the functions
const Notebook = require('../db/notebook');

// get request for /api/notes
// call the getNotes() from the class that you required
// res.json(note)

// post request for /api/notes
// call the addNotes() from the class that you required
// res.json(note)

// delete request for /api/notes/:id
// call the deleteNote() function

module.exports = router;