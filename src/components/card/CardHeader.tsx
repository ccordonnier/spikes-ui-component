import Image from 'next/image';
import React from 'react';

type CardHeaderType = {
    imageUrl?: string,
    alt?: string
}

const CardHeader = ({imageUrl, alt}: CardHeaderType) => {
    return (
        <div className='bg-dark-400 border-[1px] border-dark-200 rounded-xl py-4 flex w-full h-full aspect-[5/3]'>
            {imageUrl ? <Image src={imageUrl} alt={alt ?? ""} /> : null}
        </div>
    );
};

export default CardHeader;