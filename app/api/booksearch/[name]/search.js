const express = require('express');

const router = express.Router();

const Book = require('../models/Book');
const GetBook = async (req,res) => {
    const title = req.query;
    const queryObject = {};
    if(title)
    {
        queryObject.title = {$regex: title , $options: "i"};
    }
    const data = await Book.find(queryObject);
    res.status(500).json({data});
}
const GetBookSearch = async (req,res) => {
    const data = await Book.find(req.query);
    res.status(500).json({data});
}
router.route('/').get(GetBook)
router.route('/searching').get(GetBookSearch)

module.exports = router;
