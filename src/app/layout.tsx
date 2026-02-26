import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salvador Móveis Sob Medida | Bento Gonçalves e Região",
  description: "Transforme sua casa com a Salvador Móveis. Móveis 100% MDF com 5 anos de garantia, fabricação própria e design exclusivo para cozinhas, quartos e painéis.",
  keywords: ["Móveis Sob Medida", "Bento Gonçalves", "Móveis 100% MDF", "Cozinha planejada", "Dormitórios sob medida", "Marcenaria", "Salvador Móveis"],
  openGraph: {
    title: "Salvador Móveis Sob Medida | Qualidade e Sofisticação",
    description: "Projetos 100% MDF com 5 anos de garantia direto de fábrica.",
    url: "https://salvador-moveissobmedida.com.br/", // Altere para o domínio real
    siteName: "Salvador Móveis",
    images: [
      {
        url: "/portfolio/Logo/logo.png", // Imagem que aparece no link do WhatsApp
        width: 800,
        height: 600,
        alt: "Logo Salvador Móveis",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
