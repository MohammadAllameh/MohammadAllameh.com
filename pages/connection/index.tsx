import { useState } from 'react';
import { useTranslation } from "react-i18next";
import * as yup from 'yup'
import { Formik, Form } from 'formik'
import { useToast } from "@chakra-ui/react";
import { Tooltip } from '@chakra-ui/react'
import Image, { StaticImageData } from "next/image";

import type { GetStaticProps } from 'next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { sendContactForm } from 'app/lib/api';

import Layout from "app/components/layout";

import MyInput from '../../app/components/shared/myInput'

import contactImage from '../../public/icon/image gif/contact.png';
import LoadingBox from 'app/components/loadingBox';


// import Icon
import TelgramIcon from '../../public/icon/sosal media/telegram.png';
import InstagramIcon from '../../public/icon/sosal media/instagram.png';
import LinkdinIcon from '../../public/icon/sosal media/linkedin.png';
import GithubIcon from '../../public/icon/sosal media/github.png';
import Link from 'next/link';

interface ListItemIconInteface {
  icon: StaticImageData,
  href: string,
  tooltip: string
}

const ListItemIcon: ListItemIconInteface[] = [
  { icon: TelgramIcon, href: 'http://', tooltip: 'telegram' },
  { icon: InstagramIcon, href: 'http://', tooltip: 'instagram' },
  { icon: LinkdinIcon, href: 'http://', tooltip: 'linkedin' },
  { icon: GithubIcon, href: 'http://', tooltip: 'github' },

]

const CvPage = () => {
  const toast = useToast();
  const { t, i18n } = useTranslation('connection')
  const [spiner, setspiner] = useState(false);
  const [timeSpiner, setsTimeSpiner] = useState(0);

  let MessageSchema = yup.object().shape({
    subject: yup.string().required(`${t('fieldRequired')}`).min(3, `${t('minRequired')}`),
    message: yup.string().required(`${t('fieldRequired')}`).min(3, `${t('minRequired')}`),
    name: yup.string().required(`${t('fieldRequired')}`).min(3, `${t('minRequired')}`),
    email: yup.string().required(`${t('fieldRequired')}`).email(`${t('formatEmail')}`),
  })
  const submitHandler = async (values: any) => {

    setspiner(true);
    console.log('submit oig', values);
    try {
      await sendContactForm(values);
      toast({
        title: `${t('successMessage')}`,
        status: "success",
        duration: 2000,
        position: `${i18n.dir(i18n.language) ? 'top-right' : 'top-left'}`,
      });
      setspiner(false);

    } catch (error) {
      toast({
        title: `${t(`errorMessage \n ${error}`)}`,
        status: "error",
        duration: 2000,
        position: `${i18n.dir(i18n.language) ? 'top-right' : 'top-left'}`,
      });

      setspiner(false);

    }
    await sendContactForm(values)
  }
  return (
    <>
      <Layout>
        <div className="felx justify-center items-center h-full" >
          <div >
            <div>
              <h1 className='text-center text-lg font-bold pt-2'>شبکه های اجتماعی</h1>
              <div className='border-b-2 border-[#877f75] w-4/5 mx-auto my-2'></div>
            </div>
            <div className="grid grid-cols-2 md:flex justify-center lg:justify-evenly items-center justify-items-center flex-auto">
              <>
                {ListItemIcon.map(item => {
                  return <Link href={item.href}>
                    <Tooltip label={`${item.tooltip}`} className='toolpit-color mx-2 bg-header p-1 rounded ' placement={`${i18n.dir(i18n.language) == 'ltr' ? 'left' : 'right'}`}>
                      <div className={`flex items-center justify-center rounded-lg cursor-pointer `}>
                        <Image src={item.icon} alt={`${item.tooltip} icon`} />
                      </div>
                    </Tooltip>
                  </Link>
                })}
              </>
            </div>


          </div>
          <Formik
            initialValues={{
              message: '',
              name: '',
              email: '',
            }}
            validationSchema={MessageSchema}
            onSubmit={submitHandler}
          >
            <Form >

              <div className="block justify-center items-center">
              <div>
              <h1 className='text-center text-lg font-bold pt-2'>شبکه های اجتماعی</h1>
              <div className='border-b-2 border-[#877f75] bg-[#000A60] dark:hover: dark:text-yellow-600 text-yellow-400  w-4/5 mx-auto my-2'></div>
            </div >
                <div className=' flex justify-center'>
                  <Image className="" src={contactImage} alt="image " />
                </div>
                <div className=" justify-center items-center  flex-col flex  ">{/*  */}
                  <MyInput lable={`${t('subjectLable')}`} inputName="subject" type="text" placeholder={`${t('subjectField')}`} inputClassName='bg-header' />
                  <MyInput lable={`${t('messageLable')}`} inputName="message" type="text" placeholder={`${t('messageField')}`} as="textarea" />
                  <div>
                    <MyInput lable={`${t('emailLable')}`} inputName="email" placeholder={`${t('emailField')}`} type={'email'} autoComplete='email' />

                    <MyInput lable={`${t('nameLable')}`} inputName="name" placeholder={`${t('nameField')}`} autoComplete='name' />
                  </div>
                  <div className='flex items-center justify-center hover:bg-none active-bg-color  rounded-md color-html w-20 my-4'>
                 <button disabled={spiner} type="submit" className={`${spiner ? 'opacity-70' : ''}  btn-style-me btn-shine `}> {/*flex items-center justify-center  px-4 py-3 text-center text-sm font-semibold   cursor-pointer uppercase transition duration-700 ease-in-out   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95s */}
                  <span className={`span-btn flex justify-center items-center  ${spiner ? 'px-4' : ''}`}>
                    {t('sendBtn')}
                    {spiner ? <LoadingBox /> : ''}
                  </span>
                  
                </button>

              </div>
                </div>
              </div>


              
            </Form>
          </Formik>
        </div>

      </Layout>

    </>
  )
}


type Props = {
  // Add custom props here
}


export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'connection',
      'footer'
    ])),
  },
})


export default CvPage;