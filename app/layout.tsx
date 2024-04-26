import type { Metadata } from 'next';
import './globals.css';
import { Rubik } from 'next/font/google';
import ToasterContext from './_context/Toaster';

const rubik = Rubik({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'Тестовое задание',
  description: 'Тестовое задание',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={rubik.className}>
        <ToasterContext />
        {children}
      </body>
    </html>
  );
}
