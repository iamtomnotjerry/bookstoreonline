import User from '@/app/models/user';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req: any) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ fullname: name, email, password: hashedPassword });

    return NextResponse.json({ message: 'User registered.' }, { status: 201 });
  } catch (error) {
    console.error('Error during user registration: ', error);
    return NextResponse.json(
      { message: 'An error occurred while registering the user.' },
      { status: 500 },
    );
  }
}
