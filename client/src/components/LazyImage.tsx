import React from 'react';
import LazyLoad from "react-lazyload";
import { Image } from "@/UI/Shared/Image";

/**
 * Return Lazy loaded image. You can pass one image source as a string
 * or array of sources in this queue: 
 * min-widht: 1920px
 * min-width: 1280px
 * min-width: 960px
 * min-width: 630px
 * min-width: 320px
 * 
 * Array CAN be not complete, in this case component will generate only existing image versions
 * 
 * 
 * @param   {string|string[]}  src  Image source or array of sources
 * @param   {string} alt  Image alt
 * @return  {React.FC}     Lazy image component
 */

interface LazyProps {
  src: string | string[],
  alt: string,
  parentRef?: any
};

const LazyImage: React.FC<LazyProps> = ({
  src,
  alt,
  parentRef
}) => {

  const isArray = Array.isArray(src);

  if (isArray) {
    return (
      <picture>
         <source media="(min-width: 1920px)"
          type="image"
          srcSet={src[0]}/>
        <source media="(min-width: 1280px)"
          type="image"
          srcSet={src[1]}/>
        <source media="(min-width: 960px)" type="image"
          srcSet={src[2]} />
             <source media="(min-width:  630px)" type="image"
          srcSet={src[3]} />
                    <source media="(min-width:  320px)" type="image"
          srcSet={src[4]} />
        <Image ref={parentRef} src={src[0]} alt={alt}/>
      </picture>
    )
  }


  return(
    <LazyLoad>
      <Image
        ref={parentRef}
        src={ src }
        alt={ alt }
      />
    </LazyLoad>
  )
};

export default LazyImage;