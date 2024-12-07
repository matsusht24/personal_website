import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Beach from "../../public/beach.svg";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "700", "900"],
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
      <body className={`${roboto.className} antialiased`}>
        <div className="relative min-h-screen bg-gradient-to-b from-sky-100 to-sky-200 p-4">
          <div className="w-screen h-2/3 ">
            <Image alt="beach" src={Beach} layout="fill" objectFit="cover" />
          </div>
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
