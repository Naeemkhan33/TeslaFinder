import React, { useState } from 'react';

export const InputWithIcon = ({ icon, type, placeholder }) => {
  return (
    <div className='flex items-center h-full w-full shadow-md py-3 rounded-lg focus-within:shadow-lg bg-white overflow-hidden'>
      <div className='grid place-items-center h-full w-12 text-gray-500 ml-1'>
        <img
          className='block h-7 w-7'
          src={`/assets/icons/${icon}`}
          alt='...'
        />
      </div>
      <input
        className='peer h-full w-full outline-none text-lg placeholder-gray-500 text-gray-700 pr-2'
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export const InputNoBg = ({ icon, type, placeholder }) => {
  return (
    <div className='flex items-center h-full w-full shadow-md py-3 rounded-lg focus-within:shadow-lg border border-gray-400 overflow-hidden'>
      <div className='grid place-items-center h-full w-12 text-gray-500 ml-1'>
        <img
          className='block h-7 w-7'
          src={`/assets/icons/${icon}`}
          alt='...'
        />
      </div>
      <input
        className='peer h-full w-full outline-none text-lg placeholder-gray-300 text-gray-300 pr-2 bg-transparent'
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export const InputWithLabel = ({
  label,
  icon,
  type,
  placeholder,
  boxClassName = 'mb-8',
}) => {
  return (
    <div className={` ${boxClassName}`}>
      <label className='text-lg block mb-3'>{label}</label>
      <div className='flex items-center h-full w-full py-2 px-5 rounded-lg focus-within:shadow-lg bg-white border border-black overflow-hidden'>
        <div className='h-full w-7 text-gray-500 mr-1'>{icon}</div>
        <input
          className='p-2 h-full w-full outline-none text-lg placeholder-gray-500 text-gray-700 pr-2'
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export const InputEdit = ({
  label,
  value,
  btnName,
  type,
  valueTextClassName = 'capitalize',
}) => {
  const [edit, setEdit] = useState(true);

  return (
    <div className='py-6 border-b'>
      <div className='flex flex-col sm:flex-row'>
        <div className='mr-auto pr-5 flex-1'>
          <h6 className='text-sm text-gray-500 mb-2 capitalize'>{label}</h6>
          {edit ? (
            <h3
              className={`text-xl sm:text-2xl text-black font-medium ${valueTextClassName}`}
            >
              {value}
            </h3>
          ) : (
            <input
              class='w-full h-10 px-3 text-base text-black text-xl font-medium  placeholder-gray-600 border rounded-lg focus:shadow-outline'
              type={type}
              defaultValue={value}
            />
          )}
        </div>
        <div className='self-end order-first sm:order-last'>
          <button
            onClick={() => setEdit(!edit)}
            type='button'
            className='bg-primary-1000 hover:bg-primary-900 active:bg-primary-800 text-white py-2 px-5 rounded capitalize'
          >
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
};
