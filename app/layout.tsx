import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";

const font = Oxanium({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Perazim Farms | Fresh Farm Produce in Ogun State, Nigeria",
  description: "Perazim Farms offers fresh peppers, vegetables, fruits, root crops, and livestock in Ogun State, Nigeria. Experience quality farm produce direct from our family farm to your table.",
  keywords: "Perazim Farms, farm produce Nigeria, fresh peppers, cassava farming, pig farming Ogun State, garri processing, farm fresh vegetables, Nigerian agriculture",
  authors: [{ name: "Perazim Farms" }],
  openGraph: {
    title: "Perazim Farms - Fresh From Our Farm to Your Table",
    description: "Discover quality farm produce including peppers, vegetables, fruits, root crops, and livestock from Perazim Farms in Ogun State, Nigeria.",
    url: "https://perazimfarms.com",
    siteName: "Perazim Farms",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Perazim Farms - Fresh Farm Produce",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perazim Farms | Fresh Farm Produce Nigeria",
    description: "Fresh peppers, vegetables, fruits, root crops, and livestock from Ogun State, Nigeria.",
    images: ["/twitter-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://perazimfarms.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
       <html lang="en" className="scroll-smooth">
      <head>
        <meta name="geo.region" content="NG-OG" />
        <meta name="geo.placename" content="Ogun State" />
        <meta name="geo.position" content="6.9975;3.4737" />
        <meta name="ICBM" content="6.9975, 3.4737" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}