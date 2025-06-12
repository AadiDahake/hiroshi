import type { Metadata } from 'next';
import './globals.css';
import Navigation from './components/Navigation';

export const metadata: Metadata = {
    title: 'GreenLeaf Bistro - Farm Fresh Plant-Based Cuisine',
    description:
        'Experience vibrant flavors of locally-sourced, sustainable dining at GreenLeaf Bistro',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid=".xtta6c">
            <body className="" data-oid="cjclw6m">
                <Navigation data-oid="j121qr0" />
                {children}
            </body>
        </html>
    );
}
