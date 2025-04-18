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
                    <Link href = '/menu'>Menu</Link>
                    <Link href = '/about'>About</Link>
                    <Link href = '/careers'>Careers</Link>
                    <Link href = '/rewards'>Rewards</Link>
                </div>

                <div className = 'md:flex-1 md:flex md:justify-end md:items-center md:gap-6'>
                    <Link href = '/signup' className = 'border rounded-sm uppercase py-2 md:px-5'>Sign up</Link>
                    <Link href = '/reserve' className = 'border rounded-sm uppercase py-2 border-accent text-accent md:px-5'>Reserve</Link>
                </div>
            </div>
            
            <hr className = "hidden md:block border-accent"/>
        </nav>
    );
}
