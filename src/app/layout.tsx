import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

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
        <div className="mx-auto overflow-hidden max-w-screen-2xl">
          {children}
        </div>
      </body>
    </html>
  );
}
