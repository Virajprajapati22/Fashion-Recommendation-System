import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "@/utils/customContext";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CartContextProvider } from "@/utils/cartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Myntra Fashion App",
  description: "This is myntra fashion app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          <CartContextProvider>
            <Header />
            {children}
            <Footer />
          </CartContextProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
