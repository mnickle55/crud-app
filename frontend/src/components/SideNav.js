import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './SideNav.css'

function SideNav() {

  return (
    <Nav defaultActiveKey="/home" className="flex-column ">
      <Nav.Link><Link className='nav-link' to={'/dashboard'}>Dashboard</Link></Nav.Link>
      <Nav.Link><Link className='nav-link' to={'/inventory'}>Inventory</Link></Nav.Link>
      <Nav.Link><Link className='nav-link' to={'/account'}>Account</Link></Nav.Link>
    </Nav>
  );
}

export default SideNav;