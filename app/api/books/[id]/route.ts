import Book from "@/app/models/book";
import { NextRequest, NextResponse } from "next/server";
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string }})
{
  const id = params.id;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return NextResponse.json({ error: 'Book not found' }, { status: 404 });
    }

    return NextResponse.json( book , { status: 200 });
  } catch (error) {
    console.error('Error fetching book:', error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}