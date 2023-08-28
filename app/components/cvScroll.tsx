import React from 'react';
import { useParallax } from 'react-scroll-parallax';
import Image from 'next/image';

import animationsDev from './../../public/icon/cv/aiolern.jpg'

const MyParallaxComponent = () => {
    const parallax = useParallax({
        rotate: [0, 360],
      });
  
    return (
        <>  
        <div className="container-body">
      <div ref={parallax.ref} className="spinner">
        <div>H</div>
        <div>E</div>
        <div>L</div>
        <div>L</div>
        <div>0</div>
      </div>
    </div>
        </>
    )
};

export default MyParallaxComponent;
