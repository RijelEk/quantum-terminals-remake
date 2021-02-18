import React from 'react'
import { Box } from "@/UI/Boxes/Box";
import Snow from "@/components/Miscellaneous/Snow";
import Logo from "@/components/Miscellaneous/Logo";


export default function LayoutMenu({ children, logo }:{children:React.ReactNode, logo?:boolean}) {


  return (
    <Box position="fixed" w="100%" h="100%" backgroundSrc="/public/images/menu/bg_big.jpg" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover">
      <Box zIndex={10} overflow="hidden" disp="flex" fd='column' jc='center' ai='center' margin="0 auto" w="450px" h="100%">
        {logo ? <Logo /> : null}
        {children}
      </Box>
      <Snow />

     
    </Box>
  )
}
