import type { Metadata } from 'next';
import { Jost, League_Spartan} from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const spartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-spartan',
});

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
});

export const metadata: Metadata = {
  title: 'Fonslab',
  description: 'Empowering businesses with cutting-edge AI and blockchain solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={spartan.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-purple-50 to-blue-50 flex flex-col">
          <Navbar />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}