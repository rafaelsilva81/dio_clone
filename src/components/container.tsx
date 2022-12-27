import React, { ReactElement } from 'react';

const Container = ({ children }: { children: ReactElement[] }) => {
  return (
    <div className='flex flex-1 justify-between items-center md:p-20 p-8 gap-28'>
      {children}
    </div>
  );
};

export default Container;
