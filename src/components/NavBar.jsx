// src/components/Menu.jsx
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className='nav'>
      <ul>
        <li><Link to="/" >Inicio</Link></li>
        <li><Link to="/Nosotros" >Nosotros</Link></li>
        <li><Link to="/Galeria" >Galeria</Link></li>
        <li><Link to="/Compras" >Compras</Link></li>
        <li><Link to="/Contacto" >Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
