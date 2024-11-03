import React from 'react';
import CardHeader from './CardHeader';
import CardContent from './CardContent';

type CardType = {
    title: string,
    dateAdded: string,
    image?: { 
        src: string, 
        alt: string 
    },
    pro?: boolean,
    favorite?: boolean,
}

const Card = ({title, dateAdded, image, pro, favorite}: CardType) => {
    return (
        <div className='flex flex-col '>
            <CardHeader imageUrl={image?.src} alt={image?.alt}/>
            <CardContent title={title} dateAdded={dateAdded} pro={pro} favorite={favorite}/>
        </div>
    );
};

export default Card;