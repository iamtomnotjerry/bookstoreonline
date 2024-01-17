import { NextRequest, NextResponse } from 'next/server';
import User from '@/app/models/user';
export async function GET(
    req: NextRequest,
    { params }: { params: { email: string } },
  ) {
    const email = params.email;

    try {
        const user = await User.findOne({ email: email });

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
        return NextResponse.json({user} , { status: 200 });
    } catch(error) {
        console.error('Error :', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
