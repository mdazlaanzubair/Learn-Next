import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Codrad",
  description: "A blog app powered by Next JS and Dummy JSON",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="corporate">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
