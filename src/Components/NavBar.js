import Badge from '../Images/Badge.png'
import '../CSS/NavBar.css';


const NavBar = () => {
    return (
        <nav className="nav-menu">
          <img className="chiPsiImage" src={Badge} alt="ChiPsiSeal" />
          <NavItem name="History"/>
          <NavItem name="Programs"/>
          <NavItem name="Donate" />
        </nav>
      );
    }
    
    function NavItem({ name }) {
      return <div className="nav-item">{name}</div>;
    }
    
    export default NavBar;