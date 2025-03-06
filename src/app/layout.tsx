import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import Header from "./components/header/Header";

import "./globals.css";
import Footer from "./components/footer/Footer";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "دکتر من",
  description: "پلتفرم جامع جستجوی دکتر و رزور نوبت آنلاین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>
        <Header />
        <main> {children} </main>
        <Footer />
      </body>
    </html>
  );
}
