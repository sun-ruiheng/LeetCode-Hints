const express = require('express');

const { getHint, getHints, getHintsFiltered, createHint, deleteHint, updateHint } = require('../controllers/hintController');

const router = express.Router();

// GET all hints
router.get('/', getHints);

// GET some particular hints
router.get('/query/:qn', getHintsFiltered);

// GET one hint
router.get('/:id', getHint);

// POST a new hint
router.post('/', createHint);

// DELETE a hint
router.delete('/:id', deleteHint);

// UPDATE a hint
router.patch('/:id', updateHint);

module.exports = router;