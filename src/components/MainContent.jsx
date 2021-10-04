import React from 'react';

const MainContent = ({ children }) => {
  return (
    <div className='main-content fade-in flex flex-col flex-grow p-6 bg-white overflow-x-hidden'>
      {children}
    </div>
  );
};

export default MainContent;
