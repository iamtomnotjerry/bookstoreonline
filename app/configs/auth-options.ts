import User from '@/app/models/user';
import bcrypt from 'bcryptjs';
import { NextAuthOptions } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import dbConnect from '../lib/mongodb-connection-module';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials, _req) => {
        await dbConnect();
        const { email, password } = credentials!;
        try {
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return {
            email: user.email,
            id: user._id,
          };
        } catch (error) {
          console.error('Error:', error);
          throw error; // Rethrow the error for more information
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/signin',
  },
};
