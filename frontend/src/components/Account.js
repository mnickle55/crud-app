import { Row,Col } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../App";
import './Account.css'

const Account = () => {

  const {user, setUser} = useContext(UserContext);

  return ( 
    <div className='account-container'>
      <Row>
        <Col >
          <h1>My Account</h1>
        </Col>
      </Row>
      <Row>
        <Col >
          <h4>First Name: {user.first_name}</h4>
        </Col>
      </Row>
      <Row>
        <Col >
          <h4>Last Name: {user.last_name}</h4>
        </Col>
      </Row>
      <Row>
        <Col >
          <h4>Username: {user.username}</h4>
        </Col>
      </Row>
    </div>
   );
}
 
export default Account;