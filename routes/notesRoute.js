const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

// Route to create a new note
router.post('/notes', noteController.createNote);

// Route to get all notes
router.get('/notes', noteController.getAllNotes);

// Route to get a note by ID
router.get('/notes/:id', noteController.getNoteById);   

// Route to update a note by ID
router.put('/notes/:id', noteController.updateNote);

// Route to delete a note by ID
router.delete('/notes/:id', noteController.deleteNote);

module.exports = router;
