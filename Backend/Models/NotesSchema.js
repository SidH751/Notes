const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    note: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('NoteSchema', notesSchema);