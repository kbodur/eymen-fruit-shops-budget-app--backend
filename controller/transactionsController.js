const express = require('express');
const transactions = express.Router()
const transactionsArray = require('../models/transactions.js')
const { checkForItemNameKey } = require('../validation/transactionsValidation.js')
const nanoid = require('nanoid')



transactions.get('/', (req, res) => {
  res.json(transactionsArray)
});


transactions.get("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;
    if (transactionsArray[arrayIndex]) {
        res.status(200).json(transactionsArray[arrayIndex]);
    } else {
        res.status(404).json({ error: "Not Found" });
    }
});

// POST a new transaction
transactions.post('/', checkForItemNameKey, (req, res) => {
    const newTransaction = { id: nanoid.nanoid(5), ...req.body };
    transactionsArray.push(newTransaction);
    res.json(newTransaction);
});

// DELETE a transaction
transactions.delete("/:indexArray", (req, res) => {
    const { indexArray } = req.params;
    if (transactionsArray[indexArray]) {
        const deletedLogs = transactionsArray.splice(indexArray, 1);
        res.status(200).json(deletedLogs[0]);
    } else {
        res.status(404).json({ error: "Not Found" });
    }
});

// UPDATE a transaction
transactions.put("/:arrayIndex", checkForItemNameKey, (req, res) => {
    const { arrayIndex } = req.params;
    if (transactionsArray[arrayIndex]) {
        transactionsArray[arrayIndex] = { id: transactionsArray[arrayIndex].id, ...req.body };
        res.status(200).json(transactionsArray[arrayIndex]);
    } else {
        res.status(404).json({ error: "Not Found" });
    }
});

module.exports =  transactions;
