
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rosemary Public School",
  description:
    "Welcome to Rosemary Public School. Discover our academics, facilities, activities and admissions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
