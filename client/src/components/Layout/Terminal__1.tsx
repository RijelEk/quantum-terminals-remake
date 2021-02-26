import React from 'react'
import { Box } from '@/UI/Boxes/Box'
import Snow from '@/components/Miscellaneous/Snow'
import LogoMinified from '@/components/Miscellaneous/LogoMinified'

export default function TerminalOne({
  children,
  logo,
}: {
  children: React.ReactNode
  logo?: boolean
}) {
  return (
    <Box
      position="fixed"
      w="100%"
      h="100%"
      backgroundSrc="/public/images/terminal_1/BG.png"
      backgroundPosition="left 103%"
      backgroundRepeat="no-repeat"
      backgroundSize="28%"
    >
      <Box
        zIndex={10}
        overflow="hidden"
        disp="flex"
        fd="column"
        jc="center"
        ai="center"
        margin="0 auto"
        w="450px"
        h="100%"
      >
        {logo ? <LogoMinified /> : null}
        {children}
      </Box>
      <Snow />
    </Box>
  )
}
