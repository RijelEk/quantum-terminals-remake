import { ApolloClient,   NormalizedCacheObject,
  createHttpLink, InMemoryCache } from '@apollo/client';
import { onError } from "apollo-link-error";


const httpLink = createHttpLink({ uri: `${process.env.SERVER_API_URL}`, credentials: 'include', });

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

 
export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  credentials: "include",
  link: errorLink.concat(httpLink),
  cache: new InMemoryCache()
});
