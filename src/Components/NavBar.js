import { Link } from 'react-router-dom';
import Badge from '../Images/Badge.png';
import '../CSS/NavBar.css';

const NavBar = () => {
  return (
    <nav className="sticky-header nav-menu">
      <Link to='/'>
        <img className="chiPsiImage" src={Badge} alt="ChiPsiSeal" />
      </Link>
      <NavItem name="History" path="/history" /> 
      <NavItem name="Programs" path="/programs" />
      <NavItem name="Donate" path="/donate" />
    </nav>
  );
}

function NavItem({ name, path }) {
  return (
    <Link to={path} className="nav-item">
      {name}
    </Link>
  );
}

export default NavBar;


