import Book from '@/app/models/book';

import { NextRequest, NextResponse } from 'next/server';
export async function GET(
  req: NextRequest,
  { params }: { params: { name: string } },
) {
  const title = params.name;
  try {
    const books = await Book.find({
      title: { $regex: new RegExp(`${title}`, 'i') },
    })
      .sort('-createdAt title')
      .limit(50);

    return NextResponse.json({ books }, { status: 200 });
  } catch (error) {
    console.error('Error fetching book:', error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
