import Book from "@/app/models/book";
import { NextResponse } from "next/server";

export async function GET(req: any) {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    return NextResponse.json({ books }, { status: 200 });
  } catch (error) {
    console.error('Error fetching books:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
