import React from 'react'
import LayoutMenu from '@/components/Layout/Layout_menu'
import { Box } from '@/UI/Boxes/Box'
import { Button } from '@/UI/Buttons/Primary'
import { useHistory } from 'react-router-dom'
import { pathRegister, pathLobby, pathTerminal } from '@/app/config/paths'
import { meQuery, ME_QUERY } from '@/app/graphql/user'
import { useCustomQuery } from '@/app/hooks/graphql/query'
import Loading from '@/UI/Loading/Loading'
import { Paragraph } from '@/UI/Text/Text'

export default function Lobby() {
  const history = useHistory()
  const { loading, data, error } = useCustomQuery(ME_QUERY, meQuery)

  const mockedGame: mockGame[] = JSON.parse(localStorage.getItem('game'))

  if (loading) {
    return (
      <LayoutMenu logo={false}>
        <Box position="absolute" top="50%" center>
          <Loading />
        </Box>
      </LayoutMenu>
    )
  }

  return (
    <LayoutMenu logo>
      {mockedGame ? (
        <Box w="290px" center position="absolute" bottom="9%">
          <Paragraph center fade size="1.4rem">
            [Attention] You are playing as anonimous user. If you want to save
            you progress and participate in leaderboards please register.
          </Paragraph>
        </Box>
      ) : null}
      <Box disp="flex" fd="column">
        <Box mb={20}>
          <Button
            text="Register"
            onClick={() => history.push(pathLobby())}
            inactive={mockedGame[0].level === 0}
          />
        </Box>
        <Box mb={20}>
          <Button
            text="Terminals"
            onClick={() => history.push(pathTerminal('memo'))}
          />
        </Box>
        <Box mb={20}>
          <Button
            text="Champions"
            onClick={() => history.push(pathRegister())}
          />
        </Box>
        <Box>
          <Button text="Logout" onClick={() => {}} />
        </Box>
      </Box>
    </LayoutMenu>
  )
}
