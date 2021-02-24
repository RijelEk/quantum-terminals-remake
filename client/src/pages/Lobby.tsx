import React from 'react'
import LayoutMenu from '@/components/Layout/Layout_menu'
import { Box } from '@/UI/Boxes/Box'
import { Button } from '@/UI/Buttons/Primary'
import { useHistory } from 'react-router-dom'
import { pathRegister, pathLobby, pathTerminal } from '@/app/config/paths'

export default function Lobby() {
  const history = useHistory()

  return (
    <LayoutMenu logo>
      <Box disp="flex" fd="column">
        <Box mb={20}>
          <Button
            text="Continuez"
            src="/public/images/menu/dots.png"
            onClick={() => history.push(pathLobby())}
          />
        </Box>
        <Box mb={20}>
          <Button
            text="New Game"
            src="/public/images/menu/dots.png"
            onClick={() => history.push(pathTerminal('memo'))}
          />
        </Box>
        <Box mb={20}>
          <Button
            text="Leaderboard"
            src="/public/images/menu/dots.png"
            onClick={() => history.push(pathRegister())}
          />
        </Box>
        <Box>
          <Button
            text="Logout"
            src="/public/images/menu/dots.png"
            onClick={() => {}}
          />
        </Box>
      </Box>
    </LayoutMenu>
  )
}
