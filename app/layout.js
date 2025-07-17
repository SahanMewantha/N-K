"use client"
import { Quicksand, Raleway } from 'next/font/google'
import "./globals.css";
import dynamic from "next/dynamic";
import Footer from './components/Footer';
const Header = dynamic(() => import("./components/Header"), { ssr: false });


const quicksand = Quicksand({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-quicksand',
});

const raleway = Raleway({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-raleway',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical background images */}
        <link
          rel="preload"
          as="image"
          href="/cleaning-background.webp"
          media="(min-width: 768px)"
        />
        <link
          rel="preload"
          as="image"
          href="/bac.webp"
          media="(min-width: 768px)"
        />
        <link
          rel="preload"
          as="image"
          href="/about.webp"
          media="(min-width: 768px)"
        />
      </head>
      <body
      className={`${quicksand.variable} ${raleway.variable}`}
      >
        <Header/>
        {children}
      </body>
      
    </html>
  );
}
