import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Noverix | Tecnologia que simplifica o seu negócio",
  description:
    "Noverix desenvolve aplicações web sob medida para micro e pequenas empresas, com suporte contínuo e segurança desde o primeiro dia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`h-full antialiased ${manrope.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
