import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className = 'font-[family-name:var(--font-cormorant-garamond)]'>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
}
