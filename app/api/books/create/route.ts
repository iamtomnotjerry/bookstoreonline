import Book from '@/app/models/book';
import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newBook = {
      title: body?.title,
      author: body?.author,
      price: body?.price,
      discount: body?.discount,
      description: body?.description,
      provider: body?.provider,
      publisher: body?.publisher,
      publishYear: body?.publishYear,
      language: body?.language,
      weight: body?.weight,
      pageCount: body?.pageCount,
      coverType: body?.coverType,
      coverImage: body?.coverImage,
      images: body?.images,
      category: body?.category,
      dimensionsInCm: {
        x: body?.dimensionsInCm?.x,
        y: body?.dimensionsInCm?.y,
        z: body?.dimensionsInCm?.z,
      },
    };
    const book = await Book.create(newBook);
    return NextResponse.json({ book }, { status: 200 });
  } catch (error) {
    console.error('Error fetching book:', error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
