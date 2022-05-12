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



function App() {
  return (
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
  );
}

export default App;
