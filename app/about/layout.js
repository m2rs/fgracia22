import { Roboto, Montserrat } from "next/font/google";
import "../globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "300"
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: "300"
});

export const metadata = {
  title: "Dim's Cult",
  description: "Enjoy a new Discord experience - Join Dim's Cult today...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
