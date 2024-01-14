import mongoose, { Schema, Document } from 'mongoose';

enum CoverType {
  Soft = "soft",
  Hard = "hard",
}

interface IRating extends Document {
  authorId: mongoose.Types.ObjectId;
  content: string;
  starRating: number;
}
const RatingSchema = new Schema<IRating>({
  authorId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  content: {
    type: String,
  },
  starRating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
}, { timestamps: true });

interface IBook extends Document {
  title: string;
  author: string;
  price: number;
  discountPrice: number;
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
  genres: string[];
  ratings: [IRating];
}

const BookSchema = new Schema<IBook>({
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
  discountPrice: {
    type: Number,
    required: false,
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
  genres: {
    type: [String],
    ref: 'Genre'
  },
  ratings: {
    type: [RatingSchema]
  }
});

const BookModel = mongoose.models.Book as mongoose.Model<IBook> || mongoose.model<IBook>('Book', BookSchema);

export default BookModel;
