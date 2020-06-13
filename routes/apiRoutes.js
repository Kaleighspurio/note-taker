const router = require("express").Router();
const Notes = require("../db/notes");
const fs = require('fs');
const path = require('path');
const datafile = path.join(__dirname, '../db/db.json');
const noteData = [];

// get request for /api/notes
router.get("/notes", (req, res) => {
//   res.sendFile(datafile);
//   res.json(note)
});


// post request for /api/notes
router.post("/notes", (req, res) => {
//   console.log(req.body);
  const noteData = [];
  noteData.push(fs.readFileSync(datafile));
  const newNote = JSON.stringify({
    id: Math.floor(Math.random() * 100001),
    title: req.body.title,
    text: req.body.text,
  });
//   console.log(JSON.parse(newNote));
  // console.log(newNote);
//   const stringNewNote = JSON.stringify(newNote);
  // console.log(stringNewNote);
  noteData.push(newNote);
  console.log(noteData);

  const addNotes = () => {
    fs.writeFile(datafile, noteData, (err) => {
      if (err) throw err;
    });
    console.log("the note has been saved.");
  };
  addNotes();
  
  // push to the db.json
  // Notes.addNotes();
  // res.json(newNote);
});
// call the addNotes() from the class that you required
// res.json(note)

router.delete("/notes/:id", (req, res) => {
  Notes.deleteNote(res);
});
// delete request for /api/notes/:id
// call the deleteNote() function

module.exports = router;
