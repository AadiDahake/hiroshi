import type { Metadata } from 'next';
import { Libre_Baskerville, Roboto } from 'next/font/google';

import Layout from '@/components/Layout';

import './globals.css';

const libreBaskerville = Libre_Baskerville({
    variable: '--font-libre-baskerville',
    weight: ['400'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const roboto = Roboto({
    variable: '--font-roboto',
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Elevato',
    description: 'Elevated vegetarian Italian fine-dining experience.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang = 'en'>
            <body className = {`${libreBaskerville.variable} ${roboto.variable}`}>
                <Layout>{children}</Layout>
            </body>
        </html>
  );
}
