import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className = 'flex flex-col min-h-screen font-[family-name:var(--font-cormorant-garamond)]'>
            <Navbar/>
            <main className = 'flex-1 flex flex-col'>{children}</main>
            <Footer/>
        </div>
    );
}
