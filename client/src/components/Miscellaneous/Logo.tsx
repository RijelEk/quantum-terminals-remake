import React, {useEffect,  MouseEvent} from 'react'
import { Box } from "@/UI/Boxes/Box";
import LazyImage from "@/components/LazyImage";

export default function Logo() {


  const ref = React.createRef()  as React.MutableRefObject<HTMLInputElement>;
  const ref2 = React.createRef() as React.MutableRefObject<HTMLInputElement>;
    
  useEffect(() => {

    var wrapper = document.querySelector('body') as any;
    var layerOne = ref.current;
    var layerTwo = ref2.current;

    wrapper.addEventListener('mousemove', function (e: MouseEvent) {
      var pageX = e.clientX,
        pageY = e.clientY;

      layerOne.style.transform = 'translateX(' + pageX/100 + '%) translateY(' + pageY/100 + '%)';
      layerTwo.style.transform = 'translateX(' + pageX/150 + '%) translateY(' + pageY/250 + '%)';
      wrapper.style = 'background-position:'+ pageX/200 +'px center';
    });
  }, [])

  return (
    <Box w="100%" h="150px" id="logo" disp="flex" jc="center" ai='center'>
      <Box ref={ref} position="absolute" w="300px" h="150px" mr={30}>
       <LazyImage  src="/public/images/menu/Logo-1.png" alt="Logo"  />
      </Box>
      <Box ref={ref2} position="absolute" w="300px" h="150px" mr={30}>
        <LazyImage  src="/public/images/menu/Logo-2.png" alt="Logo" />
     </Box>
    </Box>
  )
}
