import React from 'react';

const HeadingComponent = ({ title, type, typeItem, containerClassName }) => {
  return (
    <div className={`${containerClassName} capitalize`}>
      <h1 className='text-2xl font-medium'>{title}</h1>
      <div className='text-gray-400 mt-1'>
        {type} <span className='text-gray-600 font-medium'>{typeItem}</span>
      </div>
    </div>
  );
};

export default HeadingComponent;
