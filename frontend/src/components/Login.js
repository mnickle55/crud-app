import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useNavigate,Link } from 'react-router-dom';
import { useRef,useContext } from 'react';
import { UserContext } from '../App';
import Stack from 'react-bootstrap/Stack';
import './Login.css'


const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const {user, setUser} = useContext(UserContext);

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
        return res.json()
      } else {
        emailRef.current.value=''
        passwordRef.current.value=''
        throw new Error('invalid login')
      }
    })
    .then(json=>{
      setUser(json)
      navigate('/inventory')
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className='login-container'>
      <Row>
        <Col md={8} lg={8} sm={8} className='px-5'>
          <Row className='d-flex align-items-center'>
            <Stack direction="horizontal" gap={0}>
              <img className='small-logo' src="./logo192.png" alt="site-logo"></img>
              <h4>ShelfWise</h4>
            </Stack>
          </Row>
          <Row className='justify-content-center text-center mb-3 my-5'>
            <Col>
              <h1 >Login to Your Account</h1>
            </Col>
          </Row>
          <Row className='login-form justify-content-center'>
            <Col md={8} lg={6} sm={8} xl={6}>
            <Form >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" ref={passwordRef}/>
              </Form.Group>
              <Button onClick={(e)=>handleSignIn(e)} variant="primary" type="submit">
                Sign In
              </Button>
            </Form>
            </Col>
          </Row>
          <Row className= 'my-4 text-center'>
            <Link  className='login-guest-link' to={'/inventory'}>Or continue as a guest</Link>
          </Row>

        </Col>
        <Col className='new-here-wrapper justify-content-center text-center'>
          <Row className='mb-3'>
            <Col>
              <h1>New Here?</h1>
            </Col>
          </Row>
          <Row className='text-start px-5 mb-3'>
            <Col>
              <h6>Sign up to discover the power of ShelfWise - an industry-leading inventory management software</h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant='light' onClick={()=>handleNavigateSignup()}>Sign Up</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Login;