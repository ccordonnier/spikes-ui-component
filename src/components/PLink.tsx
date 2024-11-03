import Link from 'next/link';
import React, { ReactNode } from 'react';

type PlinkType = {
    href : string, 
    children: ReactNode
}
const PLink = ({href, children} : PlinkType) => {
    return (
        <Link href={href} className='text-g hover:text-w transition-all text-sm'>
            {children}
        </Link>
    );
};

export default PLink;