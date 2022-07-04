import '../styles/globals.css'
import { ApolloClient, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
