"use client";

import Link from 'next/link';
// import { Tooltip } from 'react-tooltip';
import { Fragment, useState,FC, ReactElement  } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import { Tooltip } from '@chakra-ui/react'
import { useRouter } from 'next/router';
// import { useTranslation } from 'next-i18next';
import { useTranslation } from 'next-i18next';

import { motion } from 'framer-motion';


import {
    Bars3Icon,

    XMarkIcon,
} from '@heroicons/react/24/outline'

interface Props {
    // t : string
}

interface SidbarItem {
    id: number,
    icon: ReactElement,
    tooltip: string,
    href: string,
    name: string
}

const SidBar: FC = ({ }: Props) => {

    const { t } = useTranslation('footer')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const router = useRouter()
    const lngs = t('dir');
    let sidbar : SidbarItem[] =  [
        {

            id: 1,
            icon: <svg className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth='1.5' stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>,
            tooltip: `${t('homeicon')}`,
            href: `/${router.locale}`,
            name: '/'
        },
        {
            id: 2,
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
            ,
            tooltip: `${t('cvicon')}`,
            href: `/${router.locale}/cv`,
            name: '/cv'
        },
        {
            id: 3,
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            ,
            tooltip: `${t('articlesicon')}`,
            href: `/${router.locale}/article`,
            name: '/article'
        },
        {
            id: 4,
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth='1.5' stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>,
            tooltip: `${t('connectionicon')}`,
            href: `/${router.locale}/connection`,
            name: '/connection'
        },
    ]

    return (
        <>


            <aside className="h-screen sticky w-16 hidden lg:flex flex-col space-y-10 items-center justify-center lg:relative  text-gray-800 bg-header">
                <>
                    {sidbar.map((item) => {
                        return (
                            <>
                                <Link className='hidden lg:block' href={item.href} key={item.id} >
                                    <motion.div animate={{scale: [1, 2, 2, 1, 1],rotate: [0, 0, 270, 270, 0],borderRadius: ["20%", "20%", "50%", "50%", "20%"]}}
                                        transition={{
                                            duration: 2,
                                            ease: "easeInOut",
                                            times: [0, 0.2, 0.5, 0.8, 1],
                                            loop: Infinity,
                                            repeatDelay: 1
                                        }}>
                                            <Tooltip  label={`${item.tooltip}`} className='toolpit-color mx-2 bg-header p-1 rounded color-html' placement={`${lngs ? 'left' : 'right'}`}>
                                                <div className={` h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white ${router.asPath === item.name ? 'active-color' : 'color-icon'}`}>
                                                    {item.icon}
                                                </div>
                                            </Tooltip>

                                    </motion.div>
                                </Link>


                            </>

                        )
                    })}
                </>
            </aside>

                <div className="flex  bg-header px-4 py-2 lg:hidden ">
                        <button
                            type="button"
                            className="-mr-3 h-12 w-12  items-center justify-center rounded-md bg-icon lg:hidden "
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                </div>

            <div dir={lngs}>
                <Transition.Root show={mobileMenuOpen} as={Fragment} >
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="hidden xs:fixed xs:inset-0 xs:block xs:bg-gray-600 xs:bg-opacity-75" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40">
                            <Transition.Child
                                as={Fragment}
                                enter={`transition ease-out duration-150  ${lngs === 'rtl' ? 'ease-in-out' : 'ease-in-out'}  xs:duration-300`}
                                enterFrom={`transform opacity-0 scale-110 ${lngs === 'rtl' ? 'translate-x-full' : '-translate-x-full'}  xs:scale-100 xs:opacity-100`}
                                enterTo={`transform opacity-100 scale-100 ${lngs === 'rtl' ? 'translate-x-0' : 'translate-x-0'}  xs:scale-100 xs:opacity-100`}
                                leave={`transition ease-in duration-150  ${lngs === 'rtl' ? 'ease-in-out' : 'ease-in-out'}  xs:duration-300`}
                                leaveFrom={`transform opacity-100 scale-100 ${lngs === 'rtl' ? 'translate-x-0' : 'translate-x-0'}  xs:scale-100 xs:opacity-100`}
                                leaveTo={`transform opacity-0 scale-110 ${lngs === 'rtl' ? 'translate-x-full' : '-translate-x-full'}  xs:scale-100 xs:opacity-100`}
                            >
                                <Dialog.Panel
                                    className={`fixed inset-0 z-40 w-full  bg-header xs:inset-y-0 ${lngs === 'rtl' ? 'xs:left-auto xs:right-0' : 'xs:right-auto xs:left-0'}  rtl:text-red-200   xs:w-full xs:max-w-sm xs:shadow-lg`}
                                    aria-label="Global"
                                >
                                    <div className="flex  items-center justify-between px-4 xs:px-6">
                                        <a href="#">
                                            <img
                                                className="block h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                                alt="Your Company"
                                            />
                                        </a>
                                        <button
                                            type="button"
                                            className="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <span className="sr-only">Close main menu</span>
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    <div className="space-y-5 px-4 " dir={lngs}>
                                        {sidbar.map((item) => (
                                            <Link
                                                href={item.href}
                                                className={`${router.asPath === item.name ? ' border bg-icon ' : 'color-icon'} text-gray-300 dark:text-gray-200 flex items-center space-x-reverse space-x-2 p-3 rounded-xl`}
                                            // className={`${router.asPath === item.name ? 'active-color border bg- ' : 'color-icon'} rounded-md py-2 px-3 text-base font-medium `}
                                            >
                                                <div className={`px-4 flex items-center ${router.asPath === item.name ? ' color-header ' : 'color-icon'}`}>
                                                    {item.icon}
                                                    <span className='mx-4'>{item.tooltip}</span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
            </div>

        </>
    )
}



export default SidBar