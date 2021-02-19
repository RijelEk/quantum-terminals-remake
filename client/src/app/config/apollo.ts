import {
  ApolloClient,
  NormalizedCacheObject,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { onError } from 'apollo-link-error'
import { RetryLink } from 'apollo-link-retry'

const httpLink = createHttpLink({
  uri: `${process.env.SERVER_API_URL}`,
  credentials: 'include',
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true,
  },
  attempts: {
    max: 3,
    retryIf: (error, _operation) => !!error,
  },
})

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  credentials: 'include',
  link: errorLink.concat(retryLink.concat(httpLink)),
  cache: new InMemoryCache(),
})
