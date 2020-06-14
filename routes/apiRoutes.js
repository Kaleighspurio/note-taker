const router = require("express").Router();
const Notes = require("../db/notes");
const fs = require("fs");
const path = require("path");
const datafile = path.join(__dirname, "../db/db.json");
const noteData = [];

// get request for /api/notes
router.get("/notes", (req, res) => {
  fs.readFile(datafile, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    // response the parsed json data from the db.json file.
    res.json(JSON.parse(data));
  });
});

// post request for /api/notes
router.post("/notes", (req, res) => {
    // read the json file that already exists
  const readFile = fs.readFileSync(datafile, "utf8");
  console.log(readFile, "this is the console to look for");
//   parse the data from the db.json file
  const parsedFile = JSON.parse(readFile);
  console.log(parsedFile, "this is hopefully a parsed file");
//   create the new note
  let newNote = req.body;
//   set the id of the new note to a random number
  newNote.id = Math.floor(Math.random() * 100001);
//   push the new note to the parsed json array that was read
  parsedFile.push(newNote);
  console.log(parsedFile, "this is the log after the push");
//   stringify all of the notes
  const stringNotes = JSON.stringify(parsedFile);
  console.log(stringNotes, "These should be all the notes in string form");
//   add the stringified notes to the db.json
  const addNotes = () => {
    fs.writeFile(datafile, stringNotes, (err) => {
      if (err) throw err;
    });
    console.log("the note has been saved.");
  };
  addNotes();
  res.json(stringNotes);
});
// call the addNotes() from the class that you required
// res.json(note)

router.delete("/notes/:id", (req, res) => {
  Notes.deleteNote(res);
});
// delete request for /api/notes/:id
// call the deleteNote() function

module.exports = router;
