import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// Roboto font setup
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Solvify Technologies",
  description: "Empowering digital transformation through AI-driven solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${roboto.variable} font-roboto antialiased bg-[#000066] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
