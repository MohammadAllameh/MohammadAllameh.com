'use client';

import { ReactNode, useEffect, useState } from 'react';

import MySwitchMode from '../theme-change'
import { useTranslation } from 'next-i18next';

import SidBar from './sidbar';
import MySwitcLng from '../mySwitcLng';


interface Props {
    children: ReactNode,
}

const Layout = ({ children, }: Props) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMobile(window.matchMedia('(max-width: 1024px)').matches);
            let screenFun = () => {
                setIsMobile(window.matchMedia('(max-width: 1024px)').matches);
            }
            window.addEventListener("resize", screenFun);
            return () => window.removeEventListener("resize", screenFun);
        }
    }, []);
    const { i18n } = useTranslation('footer');
    return (
        <>
            <div dir={`${i18n.dir(i18n.language)}`} className="h-screen w-full  relative flex lg:overflow-hidden overflow-x-hidden font-Vazir ">
                {/* <SidBar  /> */}
                {!isMobile ? <SidBar /> : <></>}



                <div className="w-full h-full ">
                    {/* Header */}
                    <header className="h-16 w-full flex items-center relative max-lg:rtl:justify-start max-lg:ltr:justify-start lg:justify-end px-5 lg:ltr:space-x-8 lg:rtl:space-x-reverse bg-header lg:ltr:pl-20 lg:rtl:pr-20 " >{/* bg-gray-800 dark:bg-gray2  */}
                        {isMobile ? <SidBar /> : <></>}

                        {/* <MediaQuery maxWidth={1024}>
                            <SidBar />
                        </MediaQuery> */}

                        <MySwitchMode />
                        <MySwitcLng />


                    </header>
                    {/* Main */}
                    <main className="max-w-full h-full lg:overflow-y-auto ">
                        {/* Container */}
                        <div className="h-full w-full   bg-html ">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Layout;