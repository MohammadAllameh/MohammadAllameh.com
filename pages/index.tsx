import type { GetStaticProps, InferGetStaticPropsType } from 'next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from 'app/components/layout'
import Typeer from 'app/components/typeer'
// import SidBar from 'components/sidbar'

import Animation from 'public/icon/index2.gif';
import Image from 'next/image'
import { motion } from 'framer-motion';
import { Footer } from 'app/components/layout/footer';
import ChangeTheme from 'app/components/theme-change';

type Props = {
  // Add custom props here
}

const Homepage = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {

  return (
    <>
      <Layout>
        <div className='  lg:flex hidden  items-center justify-center w-full h-full '>
          {/* <h2 className='color-text 2xl:font-bold 2xl:text-4xl'>{t('title')}</h2> */}
          {/* {t('description')} */}
          {/* <Typeer/> */}          <div>
            <h2 className='color-text font-bold text-xl '><Typeer /></h2>

          </div>
          
          <motion.div animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity,
        repeatDelay: 1
      }}>

            <Image className='relative' src={Animation} alt='aniton'/>

      </motion.div>
      
        </div>
        <div  className='bg-red-200'>

        </div>
      </Layout>
    </>
  )
}

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'footer',
      'common'
    ])),
  },
})


export default Homepage
