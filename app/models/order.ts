// models/order.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder<Book = string> extends Document {
  user: string; // Reference to the user who placed the order
  items: {
    book: Book; // Reference to the ordered book
    quantity: number;
  }[];
  totalPrice: number;
  status: string;
  createdAt: Date;
}

const orderSchema = new Schema<IOrder>(
  {
    user: {
      type: String,
      ref: 'User',
      required: true,
    },
    items: [
      {
        book: {
          type: String,
          ref: 'Book',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: 'Pending', // You can have different status values (e.g., 'Processing', 'Shipped', 'Delivered')
    },
  },
  { timestamps: true },
);

const OrderModel =
  (mongoose.models.Order as mongoose.Model<IOrder>) ||
  mongoose.model<IOrder>('Order', orderSchema);

export default OrderModel;
