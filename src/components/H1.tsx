import React from 'react';

const H1 = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
    className?: string;
  }>) => {
    return (
        <h1 className="text-white text-2xl mb-4">
            {children}
        </h1>
    );
};

export default H1;