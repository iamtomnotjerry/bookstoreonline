const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const GenreSchema = mongoose.Schema(
    {
        id:
        {
            type: ObjectId,
            required: true,
        },
        name: 
        {
            type: String,
            required: true,
        },
        description:
        {
            type: String,
        },
    }
);
module.exports = mongoose.model('Genre',GenreSchema);