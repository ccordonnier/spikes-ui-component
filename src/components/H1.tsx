import React from 'react';
import Badge from './Badge';

const H1 = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
    className?: string;
  }>) => {
    return (
        <h1 className="text-white text-2xl mb-4">
            {children}<Badge>Pro</Badge>
        </h1>
    );
};

export default H1;