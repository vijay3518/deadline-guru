import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Deadline Guru | From Idea to Submission",
  description: "Academic guidance, dissertation support, research assistance, and final-year project mentoring. Contact Deadline Guru.",
  keywords: ["assignments", "dissertation support", "final year projects", "academic guidance"]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}