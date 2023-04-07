import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './SideNav.css'
import {MdOutlineInventory2} from 'react-icons/md'
import {VscAccount} from 'react-icons/vsc'
import {TbLayoutDashboard} from 'react-icons/tb'

function SideNav() {

  return (
    <Nav defaultActiveKey="/home" className="flex-column ">
      <Nav.Link><Link className='nav-link' to={'/dashboard'}><TbLayoutDashboard className='sidenav-icon'/>Dashboard</Link></Nav.Link>
      <Nav.Link><Link className='nav-link' to={'/inventory'}><MdOutlineInventory2 className='sidenav-icon'/>Inventory</Link></Nav.Link>
      <Nav.Link><Link className='nav-link' to={'/account'}><VscAccount className='sidenav-icon'/> 
       Account</Link></Nav.Link>
    </Nav>
  );
}

export default SideNav;