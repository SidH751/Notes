const express = require('express');
const router = express.Router();

const NoteSchema = require('../Models/NotesSchema');

router.get('/', async (req, res) => {
    try {
        const notes = await NoteSchema.find();
        res.json(notes);
    }
    catch (err) {
        res.send('Error' + err);
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
        res.json(a1);

    } catch (err) {
        res.send("Error" + err);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const note = await NoteSchema.findById(req.params.id);
        res.json(note);
    }
    catch {
        res.send("Error");

    }
})

module.exports = router;