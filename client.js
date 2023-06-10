import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "development"
      ? process.env.WP_GRAPHQL_DEV_URL
      : process.env.WP_GRAPHQL_PROD_URL,
  cache: new InMemoryCache(),
});

export default client;
