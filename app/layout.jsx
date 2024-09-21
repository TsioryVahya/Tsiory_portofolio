import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Importez vos composants ici
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

// Utilisez JetBrains_Mono depuis next/font
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Tsiory Portofolio",
  description: "Voici mon Portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} bg-primary text-white`}>
        <Header />
        <StairTransition/>
        <PageTransition>
        {children}
        </PageTransition>
        
      </body>
    </html>
  );
}
