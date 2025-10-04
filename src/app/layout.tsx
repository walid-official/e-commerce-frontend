import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from './../providers/Providers';
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DenialFashion",
  description: "T-shirt e-commerce platform. people can buy and add-to-cart their favorite t-shirts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/logo-3.png' />
        {/* <meta name='description' content='Future Bangladesh' />
        <link rel='apple-touch-icon' href='/logo.png' />
        <link rel='manifest' href='/manifest.json' /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
           {children}
           {/* <ToastContainer position="top-right" autoClose={3000} theme="light" /> */}
        </Providers>
      </body>
    </html>
  );
}
