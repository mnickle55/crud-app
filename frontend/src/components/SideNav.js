import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function SideNav() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link ><Link to={'/dashboard'}>Dashboard</Link></Nav.Link>
      <Nav.Link ><Link to={'/inventory'}>Inventory</Link></Nav.Link>
      <Nav.Link ><Link to={'/account'}>Account</Link></Nav.Link>
    </Nav>
  );
}

export default SideNav;