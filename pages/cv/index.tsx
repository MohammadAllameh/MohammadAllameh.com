import { useRouter } from "next/router";
import Link from "next/link";

import { useTranslation } from "react-i18next";


import type { GetStaticProps, InferGetStaticPropsType } from 'next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from "app/components/layout";
import Image, { StaticImageData } from "next/image";



type Props = {
  // Add custom props here
}

// import image
import book from '../../public/icon/cv/book.png';
import bm from '../../public/icon/cv/bm.png';
import rw1387 from '../../public/icon/cv/rw1387.png';
import MyParallaxComponent from "app/components/cvScroll";
import { Parallax } from "react-scroll-parallax";


// data source

interface ImageCv {
  id: number,
  href: string,
  imageSrc: StaticImageData,
  imageAlt: string
}


const orders: ImageCv[] = [
  {
    id: 1,
    href: '#',
    imageSrc: book,
    imageAlt: 'White canvas tote bag with black drawstring liner and white handle.',

  },
  {
    id: 2,
    href: '#',
    imageSrc: bm,
    imageAlt: 'Light grey canvas backpack with black handle, zipper, and edge details.',
  },
  {
    id: 3,
    href: '#',
    imageSrc: rw1387,
    imageAlt: 'Orange canvas cylindrical bag with drawstring top, front zipper pouch, and black shoulder strap.',

  },
  // More orders...
]


const CvPage = () => {

  const router = useRouter()
  const { t, i18n } = useTranslation('cv')
  return (
    // <div>
    //   <div><h1>رزومه</h1></div>
    //   <div>
    //     <div>
    //       <Image src={book} alt="developer website"/>
    //       <Link href="http://book.rw24.ir">book rw24</Link>
    //     </div>
    //     <div>
    //         <Image src={bm} alt="developer website" />
    //       <Link href="http://book.rw24.ir">book rw24</Link>
    //       </div>
    //     <div>
    //         <Image src={rw1387} alt="developer website" />
    //       <Link href="http://book.rw24.ir">book rw24</Link>
    //       </div>
    //   </div>

    // </div>

    <>

      <Layout>
        <Parallax/>
        <main
          className="mx-auto max-w-2xl py-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          aria-labelledby="order-history-heading"
        >
          <div className="max-w-xl">
            <h1 id="order-history-heading" className="text-3xl font-bold tracking-tight text-gray-900">
              Order history
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Check the status of recent orders, manage returns, and discover similar products.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            {orders.map((order) => (
              <div key={order.id} className="group relative">
                
                <Link href='https://rw1387.ir'><div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                  <Image src={order.imageSrc} alt={order.imageAlt} className="object-cover object-center" />
                </div>
                </Link>
                <h2 className="mt-4 text-sm text-gray-700 text-center">
                  <Link href='https://rw1387.ir'>Go To Website</Link>
                </h2>

              </div>
            ))}
          </div>
        </main>
        <footer>
          <MyParallaxComponent/>
        </footer>
      </Layout>

    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'cv',
      'footer',
    ])),
  },
})


export default CvPage;