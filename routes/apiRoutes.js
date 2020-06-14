const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const datafile = path.join(__dirname, "../db/db.json");

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
  // read and parse the json file that already exists
  const parsedFile = JSON.parse(fs.readFileSync(datafile, "utf8"));
  //   create the new note
  let newNote = req.body;
  //   set the id of the new note to a random number
  newNote.id = Math.floor(Math.random() * 100001);
  //   push the new note to the parsed json array
  parsedFile.push(newNote);
  //   stringify all of the notes
  const stringNotes = JSON.stringify(parsedFile);
  //   add the stringified notes back to the db.json
  fs.writeFile(datafile, stringNotes, (err) => {
    if (err) throw err;
    console.log("the note has been saved.");
  });
  res.json(stringNotes);
});

router.delete("/notes/:id", (req, res) => {
  // read the db.json file and parse it
  fs.readFile(datafile, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    const parsedData = JSON.parse(data);
    // set the id of the note that was clicked to a variable
    let clickedID = req.params.id;
    // for each note in the json array, if the note's id matches the clickedID then find the index of that note in the array and remove that note using .splice()
    parsedData.forEach((note) => {
      if (note.id == clickedID) {
        const noteIndex = parsedData.indexOf(note);
        parsedData.splice(noteIndex, 1);
      }
    });
    // Rewrite the db.json file with the new array that the note was removed from
    fs.writeFileSync(datafile, JSON.stringify(parsedData), (err) => {
      if (err) {
        throw err;
      }
    });
    res.json(JSON.stringify(parsedData));
  });
});

module.exports = router;
