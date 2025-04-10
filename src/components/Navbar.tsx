import Link from 'next/link';

import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';

export default function Navbar() {
    return (
        <nav>
            <button className = 'md:hidden'><Icon path = {mdiMenu} size = {2} className = 'text-accent' /></button>

            <div className = 'hidden md:flex md:items-center md:justify-between md:px-6 md:py-4'>
                <h2 className = 'italic uppercase md:flex-1 md:text-2xl lg:text-3xl'>Elevato</h2>

                <div className = 'uppercase md:flex-2 md:flex md:items-center md:justify-center md:gap-6'>
                    <Link href = '/'>Home</Link>
                    <Link href = '/menu' className = 'text-secondary'>Menu</Link>
                    <Link href = '/careers' className = 'text-secondary'>Careers</Link>
                    <Link href = '/rewards' className = 'text-secondary'>Rewards</Link>
                </div>

                <div className = 'md:flex-1 md:flex md:justify-end md:items-center md:gap-6'>
                    <button className = 'border rounded-sm md:px-5 py-2 uppercase'>Sign up</button>
                    <button className = 'border rounded-sm md:px-5 py-2 uppercase border-accent text-accent'>Reserve</button>
                </div>
            </div>
            
            <hr className = "hidden md:block border-accent"/>
        </nav>
    );
}
