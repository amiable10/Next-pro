import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={`${josefin.className} bg-[url("/images/background_image.png")] bg-no-repeat bg-fixed`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
