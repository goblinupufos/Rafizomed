import './App.css';
import { Container, Jumbotron, Nav, Navbar, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/HomePage';
import About from './components/AboutPage';
import Gallery from './components/GalleryPage';
import Pricing from './components/PricingPage';
import Contact from './components/ContactPage';
import "animate.css";


function App() {
  return (
    <Router>
      <div className="App">

        <Jumbotron className="ctm-jumbotron center animate__animated animate__fadeIn">
          <div className="blur"></div>
          <img src="https://www.rafiziomed.ro/wp-content/uploads/2013/01/logo_rafiziomed_nou_2151.jpg" alt="" />
        </Jumbotron>        

        <Container fluid> 
          <Navbar bg="light" expand="lg" className="ctm-navbar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"> 
              <Nav className="mr-auto center pills">
                <Link to="/">Home</Link>
                <Link to="/about">Despre Noi</Link>
                <Link to="/gallery">Galerie</Link>
                <Link to="/pricing">Preturi </Link>
                <Link to="/contact">Contact</Link>
              </Nav>  
            </Navbar.Collapse>
          </Navbar> 

          <div className="ctm-content">
            <Switch>
              <Route path="/about">
                <About />
              </Route> 

              <Route path="/gallery">
                <Gallery />
              </Route> 

              <Route path="/pricing">
                <Pricing />
              </Route> 

              <Route path="/contact">
                <Contact />
              </Route> 

              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>

        </Container>

        <div className="ctm-footer">
          <p>© Rafiziomed 2021</p>
          <a href="https://www.freepik.com/vectors/background">Background vector created by freepik - www.freepik.com</a>
        </div>

      </div>
    </Router>
  );
}

export default App;
