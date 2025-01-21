import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import "./globals.css";
import "@/styles/typography.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "دکتر من",
  description: "پلتفرم جامع جستجوی دکتر و رزرو هتل آنلاین",
  icons: {
    icon: "/favicon.ico", //  آیکون باید موجود باشد
  },
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
        <main>{children}</main>
        <p className="tagline">
          نوبت دهی پزشکی، سامانه نوبت دهی اینترنتی بیمارستان و پزشگان
        </p>
        <Footer />
      </body>
    </html>
  );
}
