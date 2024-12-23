import "./globals.css";

import localFont from "@next/font/local";
import { Baloo_Chettan_2 } from "next/font/google";
import { AppWrapper } from "./context/AppContext";

const balooChettan = Baloo_Chettan_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-baloo",
});

const bogart = localFont({
  src: [
    {
      path: "../public/fonts/bogart/Bogart-SemiBold-Italic-trial.ttf",
      style: "italic",
      weight: "600",
    },
    {
      path: "../public/fonts/bogart/Bogart-Extrabold-Italic-trial.ttf",
      style: "italic",
      weight: "800",
    },
  ],
  variable: "--font-bogart",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <AppWrapper>
    <html
      lang="en"
      className={`${bogart.variable} ${balooChettan.variable} font-sans`}
    >
      <body>{children}</body>
    </html>
    </AppWrapper>
  );
}
