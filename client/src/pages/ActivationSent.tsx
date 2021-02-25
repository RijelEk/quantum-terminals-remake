import React from 'react'
import { useHistory } from 'react-router-dom'
import LayoutMenu from '@/components/Layout/Layout_menu'
import { Header2, Paragraph } from '@/UI/Text/Text'
import { Box } from '@/UI/Boxes/Box'
import { Button } from '@/UI/Buttons/Primary'
import { pathLogin } from '@/app/config/paths'

export default function ActivationSent() {
  const history = useHistory()

  return (
    <LayoutMenu logo>
      <Box center>
        <Header2>Please confirm your email</Header2>
        <Box mt={20}>
          <Paragraph>Activation code was sent to your email.</Paragraph>
        </Box>
        <Box mt={40}>
          <Button text="Login" onClick={() => history.push(pathLogin())} />
        </Box>
      </Box>
    </LayoutMenu>
  )
}
