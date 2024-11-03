import React, { ReactNode } from 'react';

const Title = ({children} : {children: ReactNode}) => {
    return (
        <div>
            <div className='flex flex-row items-center text-white my-4 uppercase'>{children}</div>
        </div>
    );
};

export default Title;