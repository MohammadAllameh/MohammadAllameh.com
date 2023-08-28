import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
// import nextI18NextConfig from '../next-i18next.config.js'
import 'styles/globals.css'
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ThemeProvider } from 'next-themes';

import { ParallaxProvider } from 'react-scroll-parallax';


import { ChakraProvider } from "@chakra-ui/react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  
  const router = useRouter()
  return (


    <ThemeProvider  >
      <div className='animton-motion'>
        <AnimatePresence mode='wait' >
          <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.75,
            }}
            variants={{
              initialState: {
                opacity: 0,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              },
              animateState: {
                opacity: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              },
              exitState: {
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              },
            }}
            className="base-page-size "
          >
            <ChakraProvider/>
              <ParallaxProvider>
                <Component {...pageProps} />
              </ParallaxProvider>
          </motion.div>
        </AnimatePresence>
      </div>

    </ThemeProvider>



  );
}

// https://github.com/i18next/next-i18next#unserializable-configs
export default appWithTranslation(MyApp /*, nextI18NextConfig */)
