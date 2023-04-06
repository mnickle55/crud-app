import TopNav from "./TopNav";
import Inventory from "./Inventory";
import { Row,Col } from "react-bootstrap";
import SideNav from "./SideNav";
import './Home.css'
import { useContext } from 'react';
import { UserContext } from '../App';

const HomeInventory = () => {

  const {user, setUser} = useContext(UserContext);

  return ( 
    <>
      <Row>
        <TopNav/>
      </Row>
      {user && 
      <Row>
        <Col className='side-nav-container' xl={2} lg={2} md={2} sm={2}>
          <SideNav/>
        </Col>
        <Col xl={10} lg={10} md={10} sm={10}>
          <Inventory/>
        </Col>
      </Row>
      }
      {!user && 
        <Row>
          <Col >
            <Inventory/>
          </Col>
        </Row>
       }
    </>
   );
}
 
export default HomeInventory;