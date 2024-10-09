import "./globals.css";
import Navbar from "../component/navbar/page";
import Footer from "../component/footer/page";
// import Roboto from "next/font/google";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
