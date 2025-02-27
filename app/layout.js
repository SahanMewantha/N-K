import { Roboto, Playfair_Display } from 'next/font/google'
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '700'], // Specify the weights you need
  subsets: ['latin'],     // Specify the character subset (e.g., 'latin')
});

const playfair = Playfair_Display({
  weight: ['400', '700'], // Specify the weights you need
  subsets: ['latin'],     // Specify the character subset (e.g., 'latin')
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className={`${roboto.variable} ${playfair.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
