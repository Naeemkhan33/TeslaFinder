import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/outline';
import { ButtonPrimary } from '../ButtonPrimary';
import { ReactComponent as IconHand } from '../../assets/hand.svg';

export const PackCard = ({
  title,
  subTitle,
  timeTitle,
  list,
  link,
  btnTitle,
  children,
  className,
  boxClassName = '',
}) => {
  return (
    <div
      className={`relative flex flex-col card-primary p-4 rounded-2xl border ${className}`}
    >
      <div className='icon absolute bottom-32 right-16'>
        <IconHand />
      </div>
      <div className='text-left mb-8'>
        <h2 class='mb-2 text-2xl md:text-3xl xl:text-4xl leading-snug xl:leading-tight font-bold'>
          {title}
          <span className='text-lg'>{timeTitle}</span>
        </h2>
        <h4 className='mb-0 opacity-75'>{subTitle}</h4>
      </div>

      <div className={boxClassName}>
        <ul className='mb-10 relative'>
          {list.map((item) => (
            <li className={`flex items-center mb-4 ${item.itemClassName}`}>
              <span className='flex h-6 w-6 mr-4'>
                <CheckCircleIcon />
              </span>
              <span className='text-sm'>{item.name}</span>
            </li>
          ))}
        </ul>
        {children}
      </div>

      <div className='mb-5 mt-auto'>
        <ButtonPrimary link={link} name={btnTitle} />
      </div>
    </div>
  );
};
