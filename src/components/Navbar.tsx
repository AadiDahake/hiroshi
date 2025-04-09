import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <div className = 'flex items-center justify-between px-10 py-5'>
                <h2 className = 'flex-1 text-3xl italic uppercase'>Elevato</h2>

                <div className = 'flex-2 flex items-center justify-center gap-10 text-lg uppercase'>
                    <Link href = '/'>Home</Link>
                    <Link href = '/menu' className = 'text-secondary'>Menu</Link>
                    <Link href = '/careers' className = 'text-secondary'>Careers</Link>
                    <Link href = '/rewards' className = 'text-secondary'>Rewards</Link>
                </div>

                <div className = 'flex-1 flex justify-end items-center gap-10 text-lg'>
                    <button className = 'border rounded-md px-5 py-2 uppercase'>Sign up</button>
                    <button className = 'border rounded-md px-5 py-2 uppercase border-accent text-accent'>Reserve</button>
                </div>
            </div>
            
            <hr className = "border-accent" />
        </nav>
    );
}
