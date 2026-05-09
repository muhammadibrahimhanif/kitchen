import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RASME KITCHAN | Homemade Cake & Dessert Premium Jakarta",
  description:
    "RASME KITCHAN adalah toko makanan dan bakery homemade premium di Pasar Minggu, Jakarta Selatan. Cake, brownies, banana cake, dessert, dan minuman dibuat fresh dari bahan berkualitas.",
  keywords: [
    "RASME KITCHAN",
    "bakery Jakarta Selatan",
    "cake homemade",
    "brownies premium",
    "banana cake",
    "dessert box",
    "Pasar Minggu"
  ],
  openGraph: {
    title: "RASME KITCHAN | Homemade Cake & Dessert Premium",
    description: "Bakery homemade premium dengan rating 5.0 dari 29 ulasan di Pasar Minggu, Jakarta Selatan.",
    type: "website",
    locale: "id_ID"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbf3e7"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
