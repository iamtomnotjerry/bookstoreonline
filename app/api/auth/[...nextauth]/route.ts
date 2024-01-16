import NextAuth from 'next-auth/next';
import CredentialProvider from 'next-auth/providers/credentials';
import { connectMongoDB } from '@/app/lib/mongodb-connection-module';
import bcrypt from 'bcryptjs';
import User from '@/app/models/user';
import { NextAuthOptions } from 'next-auth';

const authOptions: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials, _req) => {
        const { email, password } = credentials!;
        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(
            password,
            user.password
          );

          if (!passwordsMatch) {
            return null;
          }

          return {
            email: user.email,
            id: user._id,
          };
        } catch (error) {
          console.error("Error:", error);
          throw error; // Rethrow the error for more information
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: '/signin',
  },
};

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;
