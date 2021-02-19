import { ApolloClient,   NormalizedCacheObject,
  createHttpLink, InMemoryCache } from '@apollo/client';
import { onError } from "apollo-link-error";

const link = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = createHttpLink({ uri: "http://localhost:7100/graphql",  credentials: 'include',});
 
export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  credentials: "include",
  link: httpLink,
  cache: new InMemoryCache()
});
