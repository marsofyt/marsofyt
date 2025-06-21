import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "MarSofyt | Soluções Digitais com IA e Tecnologia 3D",
  description: "Softwares personalizados, landing pages com animações 3D, agentes de inteligência artificial, infraestrutura em nuvem e experiências digitais sob medida.",
  keywords: "software sob medida, landing page 3D, agentes de IA, inteligência artificial, desenvolvimento web, nuvem, infraestrutura, MarSofyt",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "MarSofyt | Inovação com IA, 3D e Nuvem",
    description: "Crie experiências digitais únicas com landing pages animadas, inteligência artificial e soluções modernas para web, mobile e desktop.",
    type: "website",
    locale: "pt_BR",
    url: "https://marsofyt.com/",
  },
  alternates: {
    canonical: "https://marsofyt.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
