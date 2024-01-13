import { AuthProvider } from '@/app/Provider';
import StoreProvider from '@/app/providerr';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
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
              <Header />
              <div className="container mt-6">{children}</div>
            </div>
          </StoreProvider>
        </AuthProvider>
        {/* <ToastContainer /> */}
      </body>
    </html>
  );
}
