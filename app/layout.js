import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import './globals.css';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Hari Prasad | Full-Stack Developer Portfolio',
  description: 'Dark-themed animated portfolio built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<body className={`${spaceGrotesk.className} bg-[#0f0f1b] text-[#eae6f2] scroll-smooth`}>
        <Cursor/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
