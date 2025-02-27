import type { Metadata } from "next";
import { Inter, Montserrat, Ubuntu } from "next/font/google";
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

const fontUbuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: "400",
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
      <body className={`${fontMontserrat.variable} ${fontInter.variable} ${fontUbuntu.variable}`}>
        <Nav />
        {children}
        <footer
          style={{
            height: "200px",
            width: "100%",
            backgroundColor: "#401460",
          }}
        ></footer>
      </body>
    </html>
  );
}
