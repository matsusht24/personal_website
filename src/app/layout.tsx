import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import localFont from "next/font/local";
import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '700', '900'],
});


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Trent Matsushima's Website",
  description: "Trent's website to showcase past experiences and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
