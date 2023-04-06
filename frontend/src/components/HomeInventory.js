import TopNav from "./TopNav";
import Inventory from "./Inventory";
import { Row,Col } from "react-bootstrap";
import SideNav from "./SideNav";

const HomeInventory = () => {
  return ( 
    <>
      <Row>
        <TopNav/>
      </Row>
      <Row>
        <Col xl={2} lg={2} md={2} sm={2}>
          <SideNav/>
        </Col>
        <Col xl={10} lg={10} md={10} sm={10}>
          <Inventory/>
        </Col>
      </Row>
    </>
   );
}
 
export default HomeInventory;