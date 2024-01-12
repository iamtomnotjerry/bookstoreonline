const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const OrderItemSchema = new Schema (
    {
        product: 
        {
            type: ObjectId,
            ref: 'Book',
        },
        order_numbers:
        {
            type: Number,
            required: true,
        }
    }
)
module.exports = mongoose.model('Order-Items',OrderItemSchema);