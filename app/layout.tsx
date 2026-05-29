import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import type { Metadata } from "next";
import { Anton, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import Preloader from "../components/Preloader";
import StickyEmail from "./_components/StickyEmail";
import "./globals.css";

const antonFont = Anton({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rohit Dhotre — Full Stack Developer (MERN)",
  description:
    "Portfolio of Rohit Dhotre, a Full Stack MERN Developer specializing in React, Next.js, Node.js, and TypeScript. Building performant, scalable, and visually refined web applications.",
  keywords: [
    "Rohit Dhotre",
    "Full Stack Developer",
    "MERN Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Portfolio",
  ],
  authors: [{ name: "Rohit Dhotre", url: "https://github.com/Rdxdhotre" }],
  creator: "Rohit Dhotre",
  openGraph: {
    title: "Rohit Dhotre — Full Stack Developer",
    description:
      "Building performant, scalable, and visually refined web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Dhotre — Full Stack Developer",
    description: "MERN Full Stack Developer | React | Next.js | Node.js",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXX');
  `}
      </Script>
      <Script id="hotjar" strategy="afterInteractive">
        {`(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:6380611,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
      </Script>
      <body
        className={`${antonFont.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ReactLenis
          root
          options={{
            lerp: 0.08,
            duration: 1.6,
          }}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />

          <CustomCursor />
          <Preloader />
          <ScrollProgressIndicator />
          <ParticleBackground />
          <StickyEmail />
        </ReactLenis>
      </body>
    </html>
  );
}
