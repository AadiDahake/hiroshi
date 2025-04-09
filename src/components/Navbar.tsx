import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <div className = 'flex items-center justify-between my-5'>
                <h2 className = 'ml-10 text-2xl italic'>
                    ELEVATO
                </h2>

                <div className = 'flex items-center justify-center gap-10'>
                    <Link href = '/'>
                        HOME
                    </Link>
                    <Link href = '/menu' className = 'text-secondary'>
                        MENU
                    </Link>
                    <Link href = '/careers' className = 'text-secondary'>
                        CAREERS
                    </Link>
                    <Link href = '/rewards' className = 'text-secondary'>
                        MENU
                    </Link>
                </div>

                <div className = 'flex justify-between items-center mr-10 gap-10'>
                    <button className = 'border-1 rounded-md px-6 py-3'>
                        SIGN UP
                    </button>
                    <button className = 'border-1 border-accent text-accent rounded-md px-6 py-3'>
                        RESERVE
                    </button>
                </div>
            </div>
            
            <hr className = "border-accent" />
        </nav>
    );
}
