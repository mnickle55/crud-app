import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Col, Button, Navbar } from 'react-bootstrap';
import './TopNav.css'
import { UserContext } from '../App';
import { Link } from 'react-router-dom';

function TopNav() {
  const Navigate = useNavigate();
  const {user, setUser} = useContext(UserContext);

    return (
      <Navbar bg="dark" variant="dark" sticky="top">
            <Link to={'/inventory'}> <Navbar.Brand>
            <img
              src="./logo192.png"
              width="80"
              height="80"
              className="d-inline-block align-top rounded"
              alt="logo"
            />
          </Navbar.Brand></Link>
          
          <Col className="me-auto">
            <h1 className='title'>ShelfWise</h1>
          </Col>
          <Navbar.Collapse className="justify-content-end">
              {user && 
              <Navbar.Text>
                Signed in as:  <span id='user-name'>{user.username}</span>
              </Navbar.Text>}
              {!user && 
              <Navbar.Text>
                Signed in as:  <span id='user-name'>Guest</span>
              </Navbar.Text>}
              {user && <Button className='mx-4' onClick={() => {
              setUser(null)
              Navigate("/login");
            }} variant="outline-light">Logout</Button>}
              {!user && <Button className='mx-4' onClick={() => {
              setUser(null)
              Navigate("/signup");
            }} variant="outline-light">Create Account</Button>}
          </Navbar.Collapse>
      </Navbar>
    );
}


export default TopNav;