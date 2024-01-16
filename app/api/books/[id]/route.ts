import Book from '@/app/models/book';
import User from '@/app/models/user';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { connectMongoDB } from '@/app/lib/mongodb-connection-module';

async function authorizeAdmin(): Promise<NextResponse | null> {
  await connectMongoDB();
  const session = await getServerSession(authOptions);
  if (session?.user?.email == null) {
    return NextResponse.json(
      { error: 'Unauthorized operation, user not logged in' },
      { status: 401 },
    );
  }
  const user = await User.findOne({ email: session.user.email });

  if (user == null) {
    const message =
      "Logged in user not found in database. This shouldn't happen";
    console.error(message);
    throw message;
  }
  if (!user.isAdmin) {
    return NextResponse.json(
      { error: 'Unauthorized operation, forbidden' },
      { status: 401 },
    );
  }
  return null;
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id;

  try {
    const book = await Book.findById(id);
    if (!book) {
      return NextResponse.json({ error: 'Book not found' }, { status: 404 });
    }
    return NextResponse.json({ book }, { status: 200 });
  } catch (error) {
    console.error('Error fetching book:', error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const result = await authorizeAdmin();
  if (result != null) return result;

  const id = params.id;
  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return NextResponse.json({ error: 'Book not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Deleted', book }, { status: 200 });
  } catch (error) {
    console.error('Error fetching book:', error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const result = await authorizeAdmin();
  if (result != null) return result;

  const id = params.id;
  try {
    const body = await req.json();

    const book = await Book.findByIdAndUpdate(id, body, { new: true });
    if (!book) {
      return NextResponse.json({ error: 'Book not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Updated', book }, { status: 200 });
  } catch (error) {
    console.error('Error fetching book:', error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
