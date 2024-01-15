import { AuthProvider } from '@/app/Provider';
import StoreProvider from '@/app/provider';
import { cn } from '@/app/lib/utils';
import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NextTopLoader from 'nextjs-toploader';
import Header from './components/Header';
import fonts from './configs/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'BookStoreOnline',
  description: 'An online bookstore',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-gray-100 antialiased',
          fonts.fontSans.className,
        )}
      >
        <AuthProvider>
          <StoreProvider>
            <div>
              <NextTopLoader
                color="#508991"
                height={4}
                showSpinner={false}
                easing="ease"
                shadow="0 0 10px #508991,0 0 5px #508991"
                zIndex={1600}
                showAtBottom={false}
              />
              <Header />
              <div className="container mt-28 mb-16">{children}</div>
            </div>
          </StoreProvider>
        </AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
