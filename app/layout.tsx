import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GAIA - Gestão Ambiental e Inovação Aplicada",
  description: "Recicle, ganhe pontos e troque por vouchers patrocinados pelas marcas parceiras.",
  keywords: ["inovação", "sustentabilidade", "logística reversa", "vouchers", "reciclagem"],
  authors: [{ name: "GAIA" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: "GAIA",
    description: "Recicle, ganhe pontos e troque por vouchers patrocinados pelas marcas parceiras.",
    siteName: "GAIA",
  },
  twitter: {
    card: "summary_large_image",
    title: "GAIA",
    description: "Recicle, ganhe pontos e troque por vouchers patrocinados pelas marcas parceiras.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
