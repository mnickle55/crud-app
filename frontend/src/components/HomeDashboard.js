import TopNav from "./TopNav";
import { Row,Col } from "react-bootstrap";
import SideNav from "./SideNav";
import Dashboard from "./Dashboard";

const HomeDashboard = () => {
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
          <Dashboard/>
        </Col>
      </Row>
    </>
   );
}
 
export default HomeDashboard;