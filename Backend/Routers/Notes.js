const express = require('express');
const router = express.Router();
const path = require('path');

const NoteSchema = require('../Models/NotesSchema');

router.get('/addNotes', (req, res) => {
    const addNotesDir = path.join(__dirname, '../../', 'Frontend-Html/addNote.html');
    res.sendFile(addNotesDir);

})

router.get('/', async (req, res) => {
    try {
        const notes = await NoteSchema.find();
        const notesJSON = JSON.stringify(notes);
        const notesObj = JSON.parse(notesJSON);

        const showNotesDir = path.join(__dirname, '../../', 'Frontend-Html/showNotes.html');
        res.render(showNotesDir, { notes: notes });

    }
    catch (err) {
        res.send('Error ' + err);
    }
});

router.post('/', async (req, res) => {
    const note = new NoteSchema(
        {
            note: req.body.note
        }
    )

    try {
        const a1 = await note.save();
        const dir = path.join(__dirname, '../../', 'Frontend-Html/index.html');
        res.sendFile(dir);

    } catch (err) {
        res.send("Error" + err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const note = await NoteSchema.findById(req.params.id);
        res.json(note);
    }
    catch {
        res.send("Error");

    }
});

router.delete('/:id', async (req, res) => {
    try {
        await NoteSchema.findOneAndDelete({ _id: req.params.id });
        res.redirect('/notes');
    } catch (err) {
        res.send(err);
    }
})

module.exports = router;