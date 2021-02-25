import React, { useState } from 'react'
import LayoutMenu from '@/components/Layout/Layout_menu'
import { Box } from '@/UI/Boxes/Box'
import { Button } from '@/UI/Buttons/Primary'
import { useHistory } from 'react-router-dom'
import { pathLogin, pathRegister, pathLobby } from '@/app/config/paths'
import Loading from '@/UI/Loading/Loading'
import { mockUser, mockGame } from '@/app/config/mockUser'

export default function Menu() {
  const history = useHistory()
  const [loggin, setLoggin] = useState<boolean>(false)

  const loginAsAnonimUser = async () => {
    setLoggin(true)

    localStorage.setItem('user', JSON.stringify(mockUser))
    localStorage.setItem('game', JSON.stringify(mockGame))

    setTimeout(() => {
      history.push(pathLobby())
    }, 2000)
  }

  if (loggin) {
    return (
      <LayoutMenu logo={false}>
        <Loading />
      </LayoutMenu>
    )
  }

  return (
    <LayoutMenu logo>
      <Box disp="flex" fd="column">
        <Box mb={20}>
          <Button text="Login" onClick={() => history.push(pathLogin())} />
        </Box>
        <Box mb={20}>
          <Button
            text="Register"
            onClick={() => history.push(pathRegister())}
          />
        </Box>
        <Box>
          <Button text="Go anonim" onClick={() => loginAsAnonimUser()} />
        </Box>
      </Box>
    </LayoutMenu>
  )
}
