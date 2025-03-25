import "./globals.css";
import { Poppins } from "next/font/google";
import Topbar from "./Topbar";
import Bottombar from "./Bottombar";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex flex-col min-h-screen}`}>
        <Topbar />  
        <main>{children}</main>
        <Bottombar />   
      </body>
    </html>
  );
}
