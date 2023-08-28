import { useTranslation } from 'next-i18next'

import { themeChange } from 'theme-change'
import { Fragment, useState, useEffect, FC } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';

import { useTheme } from 'next-themes';
// import avatarTranslite from ''

import redIcon from '../../public/icon/colors/red.png';
import blueIcon from '../../public/icon/colors/blue.png';
import greenIcon from '../../public/icon/colors/green.png';
import whiteIcon from '../../public/icon/colors/white.png';
import blackIcon from '../../public/icon/colors/black.png';
import yellowIcon from '../../public/icon/colors/yellow.png';
import brownIcon from '../../public/icon/colors/brown.png';

interface Color {
  id: number;
  name: any;
  avatar: any;
  value: any
}

const ChangeTheme: FC = () => {
  // const [previousValue, setPreviousValue] = useState('');
  // const {t} = useTran
  const { t, i18n } = useTranslation('footer')
  let dirs = i18n.dir(i18n.language) == 'rtl' ? true : false
  const colors: Color[] = [
    {
      id: 1,
      name: `${t('black')}`,
      avatar: blackIcon,
      value: 'dark',
    },
    {
      id: 2,
      name: `${t('red')}`,
      avatar: redIcon,
      value: 'red',
      //   
    },
    {
      id: 3,
      name: `${t('blue')}`,
      avatar: blueIcon,
      value: 'blue',
      //   
    },
    {
      id: 4,
      name: `${t('green')}`,
      avatar: greenIcon,
      value: 'green',
      //   
    },
    {
      id: 5,
      name: `${t('yellow')}`,
      avatar: yellowIcon,
      value: 'yellow',
      //   
    },
    {
      id: 6,
      name: `${t('brown')}`,
      avatar: brownIcon,
      value: 'brown',
    },
    {
      id: 7,
      name: `${t('white')}`,
      avatar: whiteIcon,
      value: 'white',
    }
  ]
  const { theme, setTheme } = useTheme();
  const [selected, setSelected] = useState(colors[0])
  useEffect(() => {
    colors.forEach(color => {
      if (color.value === window.localStorage.getItem('theme')) {

        setSelected(color)
      }
    });
    themeChange(false);

  }, [setSelected])
  useEffect(() => {
    themeChange(false);
    return () => {
      themeChange(false);
    };

  }, [])
  const chenge = (selecteds: any) => {
    setSelected(selecteds)
    setTheme(selecteds.value)
  }
  return (
    <>
      <Listbox value={theme} onChange={chenge}>
        {({ open }) => (
          <>

            <div className="relative m-2">
              <Listbox.Button data-set-theme={selected.value} data-act-class="shadow-outline" className="relative w-full cursor-default rounded-md bg-white py-1.5 ltr:pl-3 ltr:pr-10 rtl:pr-10 rtl:pl-3   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                {
                  dirs ?
                    (<>
                      <span className="pointer-events-none absolute inset-y-0 right-0 mr-3 flex items-center  ">
                        <svg className="h-5 w-5 text-gray-400 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                      </span>
                      <span className="flex items-center " data-toggle-theme={selected.value}>
                        <span className="ml-3 block truncate ">{selected.name}</span>
                        <Image src={selected?.avatar} alt="image color" className="h-5 w-5 flex-shrink-0 rounded-full" />
                      </span>
                    </>)
                    : (
                      <>
                        <span className="flex items-center " data-toggle-theme={selected.value}>
                          <Image src={selected?.avatar} alt="image color" className="h-5 w-5 flex-shrink-0 rounded-full" />
                          <span className="ml-3 block truncate ">{selected.name}</span>
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center  ltr:pr-2">
                          <svg className="h-5 w-5 text-gray-400 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                        </span>
                      </>
                    )
                }

              </Listbox.Button>
              <Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-[150px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ">
                  {colors.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      className={({ active }) => `${active ? 'bg-indigo-600 text-white' : 'text-gray-900'}  relative cursor-default select-none py-2 pl-3 pr-9 `}
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center  rounded p-1">
                            <Image src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                            <span
                              className={`${selected ? 'font-semibold' : 'font-normal'} ml-3 block truncate`}
                            >
                              {person.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={`${active ? 'text-white' : 'text-indigo-600'} absolute inset-y-0 right-0 flex items-center pr-4`}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>

    </>
  )
}


export default ChangeTheme;
