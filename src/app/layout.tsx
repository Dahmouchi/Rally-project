/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "./_components/navBar/page";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

const figtree = Figtree({
  variable: "--font-figtree-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Les Joueuses Rallye - Aïcha des Gazelles édition 2026",
  description:
    "Notre binôme est composé de deux passionnées du monde du rallye, unies par l'amour de l'aventure et de l'engagement social avec une solide expérience en compétition dans différents sports. Nous relevons ensemble le défi du Rallye Aicha des Gazelles 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${figtree.variable} antialiased relative`}>
        <Link
          href={
            "https://api.whatsapp.com/send?phone=212660112597&text=Bonjour%20Les%20Joueuses%2C%20je%20viens%20de%20votre%20Site.%20Je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20votre%20projet%20et%20j%27aimerais%20en%20savoir%20plus%20sur%20les%20possibilit%C3%A9s%20de%20soutien%20ou%20de%20partenariat.%20Pourriez-vous%20me%20donner%20plus%20d%27informations%20%3F%20%F0%9F%8F%8E%EF%B8%8F"
          }
          className="w-16 z-50 h-16 cursor-pointer bottom-8 right-8 fixed"
        >
          <img src="/icons/whatsapp.png" className="w-16 h-16" alt="" />
        </Link>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="dark:bg-dark overflow-hidden">
            <NavBar />
            {children}
          </div>
        </ThemeProvider>
        <div className="absolute bottom-0">
          {" "}
          <ToastContainer />
        </div>
      </body>
    </html>
  );
}
