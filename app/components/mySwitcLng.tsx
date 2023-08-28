import { Fragment, useState, useEffect } from 'react';
import { Listbox ,Transition} from '@headlessui/react';
import { useTranslation  } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'


import iranIcon from '../../public/icon/contry/iran.png'
import englishIcon from '../../public/icon/contry/english.png'
import germanyIcon from '../../public/icon/contry/germany.png'
import chinaIcon from '../../public/icon/contry/china.png'
import franceIcon from '../../public/icon/contry/france.png'
import indiaIcon from '../../public/icon/contry/india.png'
import russiaIcon from '../../public/icon/contry/russia.png'
import arabiaIcon from '../../public/icon/contry/arabia.png'
import { useRouter } from 'next/router';

interface Lng {
  id: number;
  name: any;
  avatar: any;
  value: any
}

const MySwitchLng = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation('footer');
  let dirs = i18n.dir(i18n.language) == 'rtl' ? true : false

  const languages : Lng[] = [
    { id: 1, name: 'English', value: 'en',avatar : englishIcon },
    { id: 2, name: 'فارسی', value: 'fa', avatar : iranIcon},
    { id: 3, name: 'русский', value: 'ru', avatar : russiaIcon},
    { id: 4, name: 'français', value: 'fr', avatar : franceIcon},
    { id: 5, name: 'Deutsch', value: 'de', avatar : germanyIcon},
    { id: 6, name: '中文', value: 'zh', avatar : chinaIcon},
    { id: 7, name: 'हिन्दी', value: 'hi', avatar : indiaIcon},
    { id: 8, name: 'العربية', value: 'ar', avatar : arabiaIcon}
  ];
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  useEffect(() => {

    languages.forEach(language => {
      if (language.value === localStorage.getItem('lng')) {
        setSelectedLanguage(language)
      }
    });

  }, [])
  const handleLanguageChange = (value : any ) => {
    console.log(`${value.value} 23`)
    localStorage.setItem('lng', `${value.value}`);


    setSelectedLanguage(value);
    i18n.changeLanguage(value.value);
  };
  return (
    <>
      <Listbox value={selectedLanguage} onChange={handleLanguageChange}>
        {({ open }) => (
            <>
              <div className="relative m-2">
                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 ltr:pl-3 ltr:pr-10 rtl:pr-10 rtl:pl-3   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 ltr:mr-4 rtl:ml-4">
                  {
                    dirs ?
                    (<>
                      <span className="pointer-events-none absolute inset-y-0 right-0 mr-3 flex items-center  ">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"></path><path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"></path></svg>
                      </span>
                      <span className="flex items-center " >
                        <span className="ml-3 block truncate ">{selectedLanguage?.name}</span>
                        <Image src={selectedLanguage?.avatar} alt="image color" className="h-5 w-5 flex-shrink-0 rounded-full" />
                      </span>
                    </>)
                    : (
                      <>
                        <span className="flex items-center " >
                          <Image src={selectedLanguage?.avatar} alt="image color" className="h-5 w-5 flex-shrink-0 rounded-full" />
                          <span className="ml-3 block truncate ">{selectedLanguage?.name}</span>
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center  ltr:pr-2">
                          <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"></path><path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"></path></svg>
                        </span>
                      </>
                    )
                  }
                  
                </Listbox.Button>
              <Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-[150px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ">
              {languages.map((language) => (
                                <Link locale={language.value}  href={`${language.value}`}>

                          <Listbox.Option
                            key={language.id}
                            className={({ active }) => `${active ? 'bg-indigo-600 text-white' : 'text-gray-900'}  relative cursor-default select-none py-2 pl-3 pr-9 `}
                            value={language}
                          >
                            {({ selected, active }) => (
                              <>
                                  <Image src={language.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                                  <span
                                    className={`${selected ? 'font-semibold' : 'font-normal'} ml-3 block truncate`}
                                  >
                                    {language.name}
                                  </span>

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
                          </Link>
                        
                        ))}
              </Listbox.Options>
              </Transition>

            </div>
            </>
              )}
            </Listbox>
          </>
  );
};

export default MySwitchLng;

// import Link from "next/link";
// import Image from 'next/image';

// import { useTranslation } from 'next-i18next';

// import { Listbox, Transition } from '@headlessui/react'



// const MySwitcLng =  () =>  {

//   const { t,i18n } =  useTranslation('footer')
//   const newLanguage = i18n.language === 'en' ? 'fa' : 'en';
  


//     return (
//         <>

//             <Link locale={newLanguage} href={`${newLanguage}`}>
//               {t('lng')}
//             </Link>

//         </>
//     )
// }



// export default MySwitcLng;