import type { Metadata } from 'next'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from '@/app/Provider'
import { Roboto } from 'next/font/google'
import Head from 'next/head'
import SideBar from './components/SideBar'
import StoreProvider from '@/app/providerr';
  const roboto = Roboto({
    weight: '300',
    subsets: ['latin'],
    display: 'swap',
  })

export const metadata: Metadata = {
  title: 'BookStoreOnline',
  description: 'An online bookstore',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={roboto.className}>
        <AuthProvider>
          <StoreProvider>
            <div className="flex flex-col md:flex-row">
              <SideBar />
              <div className="flex flex-col p-2 w-full">{children}</div>
            </div>
          </StoreProvider>
        </AuthProvider>
        <ToastContainer />
      </body>
    </html>
  )
}
