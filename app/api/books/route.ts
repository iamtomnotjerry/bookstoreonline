import dbConnect from '@/app/lib/mongodb-connection-module';
import Book from '@/app/models/book';
import { NextResponse } from 'next/server';

export const revalidate = 0; // important

export async function GET(req: any) {
  try {
    await dbConnect();
    const books = await Book.find({}).sort({ createdAt: -1 }).limit(100);
    return NextResponse.json({ books }, { status: 200 });
  } catch (error) {
    console.error('Error fetching books:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
