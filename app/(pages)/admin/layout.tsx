'use client';

import { useSession } from 'next-auth/react';
import Error from 'next/error';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data } = useSession();

  if (data?.user?.email !== '23560004@gm.uit.edu.vn') {
    return <Error statusCode={404} />;
  }
  return children;
}
