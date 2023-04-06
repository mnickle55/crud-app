import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Col, Button, Navbar } from 'react-bootstrap';
import './TopNav.css'

function TopNav() {
  const Navigate = useNavigate();

    return (
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="./logo192.png"
              width="80"
              height="80"
              className="d-inline-block align-top rounded"
              alt="logo"
            />

          </Navbar.Brand>
          <Col className="me-auto">
            <h1 className='title'>StockMate</h1>
          </Col>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as:  <span id='user-name'></span>
            </Navbar.Text>
            <Button className='mx-4' onClick={() => {
              Navigate("/login");
            }} variant="outline-light">Logout</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}


export default TopNav;