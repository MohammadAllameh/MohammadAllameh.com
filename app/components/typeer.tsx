"use client";

// import TypeWriterEffect from 'typewriter-effect';
import Typewriter from 'typewriter-effect';
import  { useTranslation } from 'next-i18next'



const Typeer = ({ } : any) => {
  const {t} = useTranslation('common')
    return (
        <>
        <Typewriter
  options={{
    strings: [`${t('title')}`, `${t('description')}`],
    autoStart: true,
    loop: true,
    delay: 50,
    
  }}
  onInit={(typewriter) => {
    typewriter.start();
  }}
/>
        {/* <TypeWriterEffect
        className='bg-slate-200'
        textStyle={{
          fontFamily: 'Vazir-matn',
          color: '#3F3D56',
          fontWeight: 500,
          fontSize: '1.5em',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          `${t('title')}`,
          `${t('description')}`

          // `${lng2}`
        ]}
        loop={true}
        nextTextDelay={1000}
        typeSpeed={30}
      /> */}
        </>
    )
}

export default Typeer;