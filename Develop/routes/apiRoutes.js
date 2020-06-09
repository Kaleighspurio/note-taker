// require express
const router = require('express').Router();
// require the class file notbooks so you can use the functions
const Notebook = require('../db/notebook');

// get request for /api/notes
router.get('/notes', (req, res) => {
Notebook.getNotes();
res.json(note)
});
// call the getNotes() from the class that you required
// res.json(note)

// post request for /api/notes
router.post('/notes', (req, res) => {
Notebook.addNotes();
res.json(note)
});
// call the addNotes() from the class that you required
// res.json(note)

router.delete('/notes/:id', (req, res) => {
Notebook.deleteNote();
});
// delete request for /api/notes/:id
// call the deleteNote() function

module.exports = router;