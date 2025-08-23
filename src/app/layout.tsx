import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sebastian Salas - Desarrollador de Software & Aplicaciones",
  description:
    "Desarrollador de Software, especializado en Front-end & Aplicaciones Moviles.",
  keywords: [
    "Next.js",
    "Tailwind",
    "Portfolio",
    "Portafolio",
    "React",
    "seevsk",
    "seevsk.dev",
    "Sebastian Salas",
  ],
  openGraph: {
    title: "Sebastian Salas - Desarrollador de Software & Aplicaciones",
    description:
      "Desarrollador de Software, especializado en Front-end & Aplicaciones Moviles.",
    url: "https://seevsk.dev",
    siteName: "Sebastian Salas | seevsk-dev",
    // images: [
    //   {
    //     url: "/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "icon-tab",
    //   },
    // ],
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inter.variable} antialiased
      `}
      >
        <div className="w-[90%] mx-auto overflow-hidden max-w-screen-xl">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
