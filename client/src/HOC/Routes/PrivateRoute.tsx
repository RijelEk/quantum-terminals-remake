import React from 'react'
import { Route } from 'react-router'
import { meQuery, ME_QUERY } from '@/app/graphql/user'
import { useCustomQuery } from '@/app/hooks/graphql/query'
import { Redirect } from 'react-router-dom'
import { pathHome } from '@/app/config/paths'
import { RouteProps } from '@/HOC/Routes/types'
import Loading from '@/UI/Loading/Loading'
import LayoutMenu from '@/components/Layout/Layout_menu'
import { Box } from '@/UI/Boxes/Box'

const PrivateRoute: React.FC<RouteProps> = ({ exact, path, component }) => {
  const { loading, data, error } = useCustomQuery(ME_QUERY, meQuery)
  const mockedUser: string = localStorage.getItem('user')

  if (error) {
    return <div>Something went wrong</div>
  }

  if (loading) {
    return (
      <LayoutMenu logo={false}>
        <Box position="absolute" top="50%" center>
          <Loading />
        </Box>
      </LayoutMenu>
    )
  }

  if (data?.me != null || mockedUser) {
    return <Route exact={exact} path={path} component={component} />
  }

  return <Redirect to={pathHome()} />
}

export default PrivateRoute
