import React from 'react';

const Badge = ({
    children,
    className
  }: Readonly<{
    children: string,
    className?: string;
  }>) => {
    return (
        <span className={`text-r text-lg ml-2 ${className}`}>{children}</span>
    );
};

export default Badge;