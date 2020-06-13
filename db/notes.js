// const fs = require('fs');

// class Notes {
//     constructor(title, text){
//         this.id = 0;
//     }
//     getNotes(){
//         fs.readFile('db/db.json', (err, data) => {
//             if (err) throw err;
//             const note = JSON.parse(data);
//             return note;
//         })
//     // inside this function, READ from the db.js file
//     // the contents of the json file will be displayed on the page
//     // to read the file, use fs.readFile()
//     }

//     addNotes(){
//         // let currentID = ++this.id;
//         // const newNote = new Notes (currentID, this.title, this.text)

//         // json.stringify....
//         fs.writeFileSync('db.json', noteData, (err) => {
//             if (err) throw err;
//             console.log("the data has been saved to the file.")
//         });
//     }
//     // inside this function, write to the file using fs.writeFile()

//     deleteNotes(id){}
//     // check against all of the notes to see which one has the id you're looking to delete
//     // call getNotes() and then 'filter' the resulsts to find the id you're looking for and return the ones that don't match

// }

// module.exports = new Notes;