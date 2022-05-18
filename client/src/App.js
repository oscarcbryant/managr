import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Footer from './components/footer';
import Create from './components/createPlayers/createPlayers.js'
import Signup from './pages/Signup';
import Login from './pages/Login';
import AppBar from './components/AppBar'
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <AppBar />
          <Navbar />
          <Landing />
              <Routes>
                  <Route 
                    path="/pages/Login" 
                    element={<Login />}
                  />
                  <Route 
                    path="/pages/Signup" 
                    element={<Signup />}
                  />
                  <Route
                    path="/pages/Home" 
                    element={<Home />}
                  />
                </Routes>
            {/* <Player />
          <Create /> */}
    </Router>
  </ApolloProvider>
  );
}

export default App;
