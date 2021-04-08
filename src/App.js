import './App.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Components/Header/Header.js';
import HomePage from './Components/HomePage/HomePage.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <>
      <Header />
      <HomePage />
      {/* <Footer /> */}
    </>
  );
}

export default App;
