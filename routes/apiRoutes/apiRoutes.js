const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const db = path.join(__dirname, '../../db/db.json');

var noteArray =[];

router.get('/notes', (req, res) => {
    res.sendFile(db);
    fs.readFile(db, 'utf-8', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        notes.map(({title, text, id})=> {
            let lastNote = {
                title: `${title}`,
                text: `${text}`,
                id: `${id}`
            }
            noteArray.push(lastNote);
        });
    })
});

router.post('/notes', (req, res) => {
    let note = {
        title: req.body.title,
        text: req.body.text,
        id: JSON.stringify(noteArray.length)
    }
    noteArray.push(note)
    content = JSON.stringify(noteArray);

    fs.writeFile(db, content, function (err) {
        if (err) throw err;
    });

    module.exports = router
})