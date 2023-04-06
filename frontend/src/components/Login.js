import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';


const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleNavigateSignup = () => {
    navigate('/signup')
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/login', {
      method: "POST",
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res=> {
      if(res.status===200){
        navigate('/inventory')
      }
      return res.text()})
      .then(text=>{
        console.log(text)
        if(text==='No user account found' ){
          emailRef.current.value=''
          passwordRef.current.value=''
        } else if (text==='Invalid password'){
          passwordRef.current.value=''
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
              <h1>Login to Your Account</h1>
            </Col>
          </Row>
          <Row>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" ref={passwordRef}/>
              </Form.Group>
              <Button onClick={(e)=>handleSignIn(e)} variant="primary" type="submit">
                Sign In
              </Button>
            </Form>
          </Row>

        </Col>
        <Col>
          <Row>
            <Col>
              <h1>New Here?</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h6>Sign up to discover the power of StockMate - an industry-leading inventory management software</h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={()=>handleNavigateSignup()}>Sign Up</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;