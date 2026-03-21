
import "./globals.css";
import { CartProvider } from "./components/cartcontext";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Topwater Reaction Baits",
  description: "Handmade topwater lures built to crush — painted, assembled & tuned in Lafayette, Tennessee.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Bitter:wght@400;600;700&family=Source+Sans+3:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: "#241508", color: "#F2E8D0" }}>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  );
}
