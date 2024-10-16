import React from 'react';

const Badge = ({
    children,
  }: Readonly<{
    children: string
  }>) => {
    return (
        <span className='text-r text-lg ml-2'>{children}</span>
    );
};

export default Badge;