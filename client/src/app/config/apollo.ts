import {
  ApolloClient,
  NormalizedCacheObject,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'

/**
 * Creating api-gateway link
 */
const httpLink = createHttpLink({
  uri: `http://localhost:7100/graphql`,
  credentials: 'include',
})

/**
 * Catching high level graphql errors
 */
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

/**
 * Create Apollo Client
 */
export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  credentials: 'include',
  link: errorLink.concat(httpLink) as any,
  cache: new InMemoryCache(),
})
