import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Grenier Marin",
  description: "Root URL for AMP Project",
};


export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${outfit.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <head>
        <link rel='icon' type='image/x-icon' href='logo_alma.png' ></link>
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0f1e] text-white font-outfit">
          <div className="relative z-10 flex flex-col flex-1" />
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}

