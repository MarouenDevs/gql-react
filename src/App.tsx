import React from 'react';
import UserList from './components/UserList';
import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
  });
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <p>
          Learn graphql
        </p>
      </header>
      <br></br>
      <UserList/>
    </div>
    </ApolloProvider>
  );
}

export default App;
