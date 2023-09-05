import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="light" expand="sm" className='navbar-container'>
        <Link to={'/listadoArticulos'}><img src='/img/anal.png' className='logo'/></Link>
    </Navbar>
  )
}

export default NavBar;