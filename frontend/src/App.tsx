import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { TestComponent } from './TestComponent';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <TestComponent />
    </ApolloProvider>
  );
}

export default App;
