import React from 'react';
import axios from 'axios';

// import logo from './logo.svg';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// const API_URL = 'http://localhost:3000/';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const getRecords = () => {
  axios
    .get(`http://localhost:3000/records`, {'headers': {'Access-Control-Allow-Origin': '*'}}
    )
    .then((results) => console.log(results))
    .catch((err) => console.log(err));
}

function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="dark" className="navbar">
          <Navbar.Brand className="navbar__brand">Vinyltheque</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <Row>
        <Container>
          {getRecords()}
        </Container>
      </Row>
    </div>
  );
}

export default App;
