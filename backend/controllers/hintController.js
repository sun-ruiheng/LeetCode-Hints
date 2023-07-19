const Hint = require('../models/hintModel');
const mongoose = require('mongoose');

// get all hints
const getHints = async (req, res) => {
    const hints = await Hint.find({}).sort({ createdAt: -1 });
    res.status(200).json(hints);
}

// get hints by filtering question
const getHintsFiltered = async (req, res) => {
    const { qn } = req.params;

    const hints = await Hint.find({ question: qn }).sort({ createdAt: -1 });

    if (!hints) {
        return res.json({oops: "No hints for that question yet!"});
    }

    res.status(200).json(hints);
}

// get a single hint by its ID
const getHint = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid ID to get"});
    }

    const hint = await Hint.findById(id);

    if (!hint) {
        return res.status(404).json({error: "No such hint to view"});
    }

    res.status(200).json(hint);
}

// create a new hint
const createHint = async (req, res) => {
    const {question, title, body, name} = req.body;
    console.log(name);

    // add to DB
    try {
        const hint = await Hint.create({ question, title, body, name });
        res.status(200).json(hint);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

// delete a hint [CONSIDER HOW TO ADD THIS FEATURE TO THE AVERAGE USER...]
const deleteHint = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "Invalid ID for deletion"});
    }

    const hint = await Hint.findOneAndDelete({_id: id});

    if (!hint) {
        return res.status(400).json({error: "No such hint to delete"});
    }

    res.status(200).json(hint);
}

// update a hint
const updateHint = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "Invalid ID to update"});
    }

    const hint = await Hint.findOneAndUpdate({_id: id});

    if (!hint) {
        return res.status(400).json({error: "No such hint to update"});
    }

    res.status(200).json(hint);
}

module.exports = {
    getHint,
    getHints,
    getHintsFiltered,
    createHint,
    deleteHint,
    updateHint
}