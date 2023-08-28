import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";


import type { GetStaticProps,GetServerSideProps, InferGetStaticPropsType } from 'next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from "app/components/layout";


type Props = {
    // Add custom props here
}


const ArticlePage = () => {
    const router = useRouter()
    const { t } = useTranslation('article')
    return (
        <>
        <Layout>
        <h2>{t('title')}</h2>
            <p>{t('description')}</p>
        </Layout>
        
        </>
    )
}

export const getServerSideProps : GetServerSideProps<Props> = async ({
    locale,
  }) => ({
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'article',
        'footer',
      ])),
    },
  })
  

export default ArticlePage;