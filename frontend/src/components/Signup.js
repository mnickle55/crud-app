import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'
import Stack from 'react-bootstrap/Stack'

const Signup = () => {
  const navigate = useNavigate();
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const retypedPasswordRef = useRef(null);

  const handleSignUp = (e) => {
    e.preventDefault();
    if(firstNameRef.current.value==='' || lastNameRef.current.value==='' || lastNameRef.current.value==='' || emailRef.current.value ==='' || usernameRef.current.value==='' || passwordRef.current.value==='' || retypedPasswordRef.current.value===''){
      return
    }
    fetch('http://localhost:5000/signup', {
      method: "POST",
      body: JSON.stringify({
        first_name: firstNameRef.current.value,
        last_name: lastNameRef.current.value,
        email: emailRef.current.value,
        username: usernameRef.current.value,
        password: passwordRef.current.value,
        retypedPassword: retypedPasswordRef.current.value
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res=> {
      console.log(res)
      if(res.status===200){
        navigate('/login')
      } 
      return res.text()})
      .then(text=>{
        if(text==='Passwords do not match'){
          passwordRef.current.value=''
          retypedPasswordRef.current.value=''
        } else if (text==='This username is already taken'){
          usernameRef.current.value=''
        }
      })
    .catch(err => console.log(err) )
  }

  return (
    <div className='signup-container'>
      <Row className='signup-background'>
        <Col>
          <Row>
          <Stack direction="horizontal" gap={0}>
              <img className='small-logo' src="./logo192.png" alt="site-logo"></img>
              <h4>ShelfWise</h4>
            </Stack>
          </Row>
          <Row className='justify-content-center text-center'>
            <Col md={6} lg={6} className='form-wrapper-top'>
              <h1>Signup</h1>
            </Col>
          </Row>
          <Row className='justify-content-center py-0'>
            <Col md={6} lg={6} className='form-wrapper-bottom px-3'>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control ref={firstNameRef} placeholder="First Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control ref={lastNameRef} placeholder="Last Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control ref={usernameRef} placeholder="Username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control ref={emailRef} type="email" placeholder="Email" />
                  <Form.Text className="text-black mx-2">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control ref={retypedPasswordRef} type="password" placeholder="Retype Password" />
                </Form.Group>
                <Row className='text-center'>
                  <Col>
                  <Button className='signup-btn' onClick={(e) => handleSignUp(e)} variant="primary" type="submit">
                  Sign Up
                </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='footer justify-content-center align-content-center text-center py-3 my-0'>
        <Col md={3} lg={3}>
          <h6 className='text-white'>Already have an account? <Link className='text-white' to={'/login'}>Login </Link></h6>
        </Col>
      </Row>
    </div>
  );
}

export default Signup;