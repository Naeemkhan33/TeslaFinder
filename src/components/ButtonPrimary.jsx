import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonPrimary = ({ link, name }) => {
  return (
    <Link
      to={link}
      className='active:bg-primary-700 w-full flex items-center justify-center px-8 py-2.5 shadow-primary border border-transparent text-base
      rounded-lg text-white bg-primary-1000 hover:bg-primary-900 cursor-pointer md:text-lg font-medium card-btn'
    >
      {name}
    </Link>
  );
};

export const ButtonPrimaryBtn = ({ type, name }) => {
  return (
    <button
      type={type}
      className='active:bg-primary-700 w-full flex items-center justify-center px-3 py-4 shadow-primary border border-transparent text-base
      rounded-lg text-white bg-primary-1000 hover:bg-primary-900 cursor-pointer md:text-lg font-medium'
    >
      {name}
    </button>
  );
};
