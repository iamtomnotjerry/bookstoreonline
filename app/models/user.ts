import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
    userId: mongoose.Types.ObjectId;
    fullname: string;
    username: string;
    email: string;
    password: string;
    address: string;
    phoneNumber: string;
    ownedBooks: string[]; // bookId
    cart: string[]; // bookId
    isAdmin: boolean;
    resetToken?: string;
    resetTokenExpiration?: Date | number; // Allow both Date and number (timestamp)
}

const UserSchema = new Schema<IUser>({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },  
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  ownedBooks: [{
    type: String,
    ref: 'Book',
  }],
  cart: [{
    type: String,
    ref: 'Book',
  }],
  isAdmin:
  {
    type: Boolean,
    default: false,
  },
  resetToken: {
    type: String,
  },
  resetTokenExpiration: {
    type: Schema.Types.Mixed, // Allow both Date and number (timestamp)
    get: (timestamp: number) => new Date(timestamp), // Custom getter for conversion
  },
}, { timestamps: true });

const UserModel = mongoose.models.User as mongoose.Model<IUser> || mongoose.model<IUser>('User', UserSchema);

export default UserModel;
