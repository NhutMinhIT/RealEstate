import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className='' style={{
            filter: "brightness(95%)",
        }}>
            <Link href='#'>
                <Image
                    src='/logo.png'
                    alt='logo'
                    width={150}
                    height={34}
                />
            </Link>
        </nav>
    );
};

export default Navbar;