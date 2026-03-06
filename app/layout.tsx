import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import 'lenis/dist/lenis.css';
import { ReactLenis } from 'lenis/react';
import type { Metadata } from 'next';
import { Anton, Roboto_Flex } from 'next/font/google';
import Script from 'next/script';
import Preloader from '../components/Preloader';
import StickyEmail from './_components/StickyEmail';
import './globals.css';

const antonFont = Anton({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-anton',
});

const robotoFlex = Roboto_Flex({
    weight: ['100', '400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-roboto-flex',
});

export const metadata: Metadata = {
    title: 'Portfolio - Rohit Dhotre  ',
    description: 'Personal portfolio of Rohit Dhotre  ',
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
                className={`${antonFont.variable} ${robotoFlex.variable} antialiased`}
            >
                <ReactLenis
                    root
                    options={{
                        lerp: 0.1,
                        duration: 1.4,
                    }}
                >
                    {/* <a
                        href="https://forms.gle/t73XYJgWD5cJNr6e8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 block bg-black text-center z-[1] text-sm py-2 hover:text-primary transition-all"
                    >
                        Frontend dev? I&apos;ll help you polish your resume —
                        completely free.
                    </a> */}
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
