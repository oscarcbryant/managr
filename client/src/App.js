import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/footer';
import Player from './components/showPlayers/showPlayers.js';
import Create from './components/createPlayers/createPlayers.js'



function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
      </Routes>
        <Body />
        <Player />
        <Create />
  </Router>
  );
}

export default App;
