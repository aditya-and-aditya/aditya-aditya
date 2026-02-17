import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/layout/Header";
import Footer from "./_components/layout/Footer";

export const metadata: Metadata = {
  title: "Aditya & Aditya - The Tech Bros",
  description: "NEO-Business oriented Tech Solutions with Aditya Dixit & Aditya Upadhyay",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
