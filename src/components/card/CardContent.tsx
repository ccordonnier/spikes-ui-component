import React from 'react';
import Badge from '../Badge';
import { Bookmark, Minus } from 'lucide-react';


type CardContentType = {
    title: string,
    dateAdded?: string,
    pro?: boolean,
    favorite?: boolean,
    titleRank?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
}

const CardContent = ({ title, dateAdded, pro, favorite, titleRank }: CardContentType) => {
    const Tag = titleRank || "h2";
    return (
        <div className='ml-2'>
            <div className="flex flex-row  mt-4 justify-between">
                <div className='flex flex-row'>
                    <Tag className="text-white text-md uppercase">
                        {title}
                        <Badge className={"normal-case text-xs"}>Pro</Badge>
                    </Tag>
                </div>
                <Bookmark color={favorite ? '#FF2900' : "#7E7F81"} fill={favorite ? "#FF2900" : "transparent"} strokeWidth="1" size={16}/>
            </div>
            <p className="flex flex-row items-center text-g text-sm ">
                <Minus className='flex flex row' strokeWidth="1" size={16} color='#7e7f81'/> Added {dateAdded}
            </p>
        </div>
    );
};

export default CardContent;