import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Ranjeet - Senior Full Stack Engineer",
  description: "Portfolio for Ranjeet, senior full stack engineer."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
