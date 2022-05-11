import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/footer';
import Player from './components/showPlayers/showPlayers.js';
import Create from './components/createPlayers/createPlayers.js'
import Signup from './pages/Signup';
import Login from './pages/Login';
import AppBar from './components/AppBar'



function App() {
  return (
    <Router>
      <AppBar />
        <Navbar />
        <Home />
            <Routes>
                <Route 
                  path="/pages/Login" 
                  element={<Login />}
                />
                <Route 
                  path="/pages/Signup" 
                  element={<Signup />}
                />
              </Routes>
          {/* <Player />
        <Create /> */}
  </Router>
  );
}

export default App;
