import Book from "@/app/models/book";

import { NextRequest, NextResponse } from "next/server";
export async function GET(
    req: NextRequest,
    { params }: { params: { name: string }})
  {

    const title = params.name;
    try {
      const book = await Book.findOne({ title: { $regex: new RegExp(`^${title}$`, 'i') } });
      
      if (!book) {
        return NextResponse.json({ error: 'Book not found' }, { status: 404 });
      }
      return NextResponse.json({id:book._id} , { status: 200 });
    } catch (error) {
      console.error('Error fetching book:', error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }