import { Roboto } from 'next/font/google';

import './globals.css';
import ClientOnly from './components/ClientOnly';
import { Navbar } from './components/navbar';

export const metadata = {
  title: 'Kurao-sosmed',
  description: 'Next Kurao Social Media App',
};

const font = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
