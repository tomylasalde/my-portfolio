import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar from './components/Navbar'; // Asegúrate de que la ruta sea correcta
import Footer from './components/Footer'; // Asegúrate de que la ruta sea correcta

import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Tomas Lasalde Pataro",
  description: "Mi portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} bg-no-repeat bg-gradient-cover min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
