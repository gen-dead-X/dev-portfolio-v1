import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "DevFolio",
  description: "The Developer Portfolio of Joyrudra Biswas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-900">{children}</body>
    </html>
  );
}
