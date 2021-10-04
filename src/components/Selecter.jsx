import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid';

export function CustomSelect({ options, placeHolder, icon }) {
  const [selected, setSelected] = useState({ options });

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className='relative h-full'>
        <Listbox.Button className='relative h-full w-full flex items-center py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 text-lg'>
          <span className='ml-1'>
            <img
              className='block h-7 w-7'
              src={`/assets/icons/${icon}`}
              alt='...'
            />
          </span>
          <span className='block truncate ml-2 text-gray-600 '>
            <span className='absolute pos-top-center text-gray-500'>
              {placeHolder}
            </span>
            <span className='bg-white relative'>{selected.name}</span>
          </span>
          <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
            <ChevronDownIcon
              className='w-7 h-7 text-lg text-gray-400'
              aria-hidden='true'
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
            {options.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `${active ? 'text-gray-500 bg-amber-100' : 'text-gray-700'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                }
                value={person}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`${
                        selected ? 'font-medium' : 'font-normal'
                      } block truncate`}
                    >
                      {person.name}
                    </span>
                    {selected ? (
                      <span
                        className={`${
                          active ? 'text-gray-500' : 'text-gray-700'
                        }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                      >
                        <CheckIcon className='w-5 h-5' aria-hidden='true' />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}

export function CustomSelectWithIcon({ options, placeHolder, icon }) {
  const [selected, setSelected] = useState({ options });

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className='relative h-full'>
        <Listbox.Button className='relative h-full w-full flex items-center py-2 px-4 text-left bg-white rounded-lg border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 text-lg'>
          <span className='block truncate mr-6 text-gray-600 '>
            <span className='absolute pos-top-center text-gray-500 text-sm font-medium'>
              {placeHolder}
            </span>
            <span className='bg-white relative text-sm font-medium'>
              {selected.name}
            </span>
          </span>
          <span className='ml-auto'>
            <img
              className='block h-7 w-7'
              src={`/assets/icons/${icon}`}
              alt='...'
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
            {options.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `${active ? 'text-gray-500 bg-amber-100' : 'text-gray-700'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                }
                value={person}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`${
                        selected ? 'font-medium' : 'font-normal'
                      } block truncate`}
                    >
                      {person.name}
                    </span>
                    {selected ? (
                      <span
                        className={`${
                          active ? 'text-gray-500' : 'text-gray-700'
                        }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                      >
                        <CheckIcon className='w-5 h-5' aria-hidden='true' />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
