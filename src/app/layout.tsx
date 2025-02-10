import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Nav } from "@/shared/components/nav";

const fontMontserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Provinding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${fontMontserrat.variable} ${fontInter.variable} `}>
        <Nav />
        {children}
        <footer style={{ height: "200px", width: "100%", marginTop: 50, backgroundColor: "#401460" }}>

        </footer>
      </body>
    </html>
  );
}
