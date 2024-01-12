const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Orders = new Schema (
    {
        orderItems:
        [{
            type: ObjectId,
            ref: 'OrderItems',
            required: true,
        }],
        status:
        {
            type: String,
            required: true,
            default: 'Cho xu ly',
        },
        price:
        {
            type: Number,
        },
        user:
        {
            type: ObjectId,
            ref: 'User',
        },
        adress:
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
        OrderDate:
        {
            type: Date,
            default: Date.now
        }
    }
)
module.exports = mongoose.model('Order',Orders);