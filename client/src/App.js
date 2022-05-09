import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Body from './components/body';
import Footer from './components/footer';



function App() {
  return (
    <Router>
      <Header />
      <Navbar />
  </Router>
  );
}

export default App;
