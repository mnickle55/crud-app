import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <Container>
      <Row>
        <Col md={8} lg={8} sm={8}>
          <Row>
            <Col>
              <img src="./logo192.png" alt="site-logo"></img>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>Signup</h1>
            </Col>
          </Row>
          <Row>
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
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control ref={passwordRef} type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control ref={retypedPasswordRef} type="password" placeholder="Retype Password" />
              </Form.Group>
              <Button onClick={(e)=>handleSignUp(e)} variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <h6>Already have an account?</h6>
        </Col>
        <Col>
          <Link to={'/login'}>Login </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;