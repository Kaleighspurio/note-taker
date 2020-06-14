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
    res.json(data);
  });
  //   res.sendFile(datafile);
  //   res.json(note)
});

// post request for /api/notes
router.post("/notes", (req, res) => {
  //   console.log(req.body);
  const noteData = [];
  //   fs.readFileSync(datafile, (err, data) => {
  //       if (err){
  //           throw err;
  //       }
  //       console.log(data, "this is the console log in the read file");
  //     //  noteData.push(data);
  //   })

  const readFile = fs.readFileSync(datafile, "utf8");
  console.log(readFile, "this is the console to look for");
  const parsedFile = JSON.parse(readFile);
  console.log(parsedFile, "this is hopefully a parsed file");
  noteData.push(readFile);
  let newNote = req.body;
  newNote.id = Math.floor(Math.random() * 100001);
  parsedFile.push(newNote);
  console.log(parsedFile, "this is the log after the push");
  const stringNotes = JSON.stringify(parsedFile);
  console.log(stringNotes, "These should be all the notes in string form");
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
