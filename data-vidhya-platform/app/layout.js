// src/app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';

// Use Inter font instead of Geist
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Data Vidhya Platform',
  description: 'Learn data engineering with Data Vidhya',
};

// This should be the only default export in this file
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}