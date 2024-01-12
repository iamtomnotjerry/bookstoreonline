import mongoose, { Schema, Document } from 'mongoose';

enum CoverType {
  Soft = "soft",
  Hard = "hard",
}

interface IBook extends Document {
  bookId: mongoose.Types.ObjectId;
  title: string;
  author: string;
  price: number;
  description: string;
  provider: string;
  publisher: string;
  publishYear: number;
  language: string;
  weight: number;
  dimensionsInCm: { x: number, y: number, z:number }
  pageCount: number;
  coverType: CoverType;
  coverImageUrl: string;
  tags: string[];
}

const BookSchema = new Schema<IBook>({
  bookId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  publishYear: {
    type: Number,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  dimensionsInCm: {
    type: { x: Number, y: Number, z: Number },
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
  coverType: {
    type: String,
    required: true,
    enum: [ "soft", "hard" ],
  },
  coverImageUrl: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
});

const BookModel = mongoose.models.Book as mongoose.Model<IBook> || mongoose.model<IBook>('Book', BookSchema);

export default { BookModel };
