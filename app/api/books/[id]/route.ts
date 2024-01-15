import Book from "@/app/models/book";
import { getServerSession } from "next-auth";
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

    return NextResponse.json({book} , { status: 200 });
  } catch (error) {
    console.error('Error fetching book:', error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string }})
{
  // !TODO: Authorize user here. Only admins
  const id = params.id;
  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return NextResponse.json({ error: 'Book not found' }, { status: 404 });
    }

    return NextResponse.json({ message: "Deleted", book } , { status: 200 });
  } catch (error) {
    console.error('Error fetching book:', error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string }})
{
  // !TODO: Authorize user here. Only admins
  const id = params.id;
  try {
    const body = req.json();
    const book = await Book.findByIdAndUpdate(id, body, { new: true });
    if (!book) {
      return NextResponse.json({ error: 'Book not found' }, { status: 404 });
    }

    return NextResponse.json({ message: "Updated", book } , { status: 200 });
  } catch (error) {
    console.error('Error fetching book:', error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}