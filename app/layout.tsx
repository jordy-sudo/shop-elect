import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { monteserrat } from './fonts';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MegaOHM',
  description: 'Servicios electrónicos Online',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body suppressHydrationWarning={true} className={`${monteserrat.className} antialiased`}>
      <Providers>
        {children}
      </Providers>
    </body>
  </html>
  );
}
