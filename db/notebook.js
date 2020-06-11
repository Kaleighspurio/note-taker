// require uuidv4 package to generate an id : uuidv4()
const fs = require('fs');
// const { uuid } = require('uuidv4');

class Notebook {
    constructor(id, title, text){
        this.id = id;
        this.title = title;
        this.text = text;
    }
    getNotes(){
        fs.readFile('/db.json', (err, data) => {
            if (err) throw err;
            return data;
        })
    // inside this function, READ from the db.js file
    // the contents of the json file will be displayed on the page
    // to read the file, use fs.readFile()
    }

    addNotes(){
        const newNote = {
            // id: { uuid },
            title: req.body.title,
            text: req.body.text
        }
        fs.writeFile('db.json', (err, newNote) => {
            if (err) throw err;
            console.log(newNote);
        })
    }
    // inside this function, write to the file using fs.writeFile()

    deleteNotes(){}
    // check against all of the notes to see which one has the id you're looking to delete
    // call getNotes() and then 'filter' the resulsts to find the id you're looking for and return the ones that don't match


    // *you might still need other functions...
}

module.exports = Notebook;