const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demo-bookstore');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema (
    {
        userId: {type: ObjectId},
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        address:
        {
            street: {
                type: String,
                defaut: ''
            },
            ward: {
                type: String,
                defaut: ''
            },
            city: {
                type: String,
                defaut: ''
            },
        },
        phone_number: {
            type: Number,
            required: true,
        },
        isAdmin:
        {
            type: Boolean,
            default: false,
        },
    },
    {
        collection: 'UserAccount',
    }
)
const usermodel = mongoose.model('UserAccount',userSchema);
module.exports = usermodel;