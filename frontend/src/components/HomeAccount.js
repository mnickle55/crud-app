import TopNav from "./TopNav";
import { Row,Col } from "react-bootstrap";
import SideNav from "./SideNav";
import Account from "./Account";
import './Home.css'

const HomeAccount = () => {
  return ( 
    <>
      <TopNav/>
      <Row>
        <Col className='side-nav-container' xl={2} lg={2} md={2} sm={2}>
          <SideNav/>
        </Col>
        <Col className='full-height' xl={10} lg={10} md={10} sm={10}>
          <Account/>
        </Col>
      </Row>
    </>
   );
}
 
export default HomeAccount;