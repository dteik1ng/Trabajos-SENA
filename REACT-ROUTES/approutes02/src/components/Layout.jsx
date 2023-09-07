import { Link } from "react-router-dom";
export default function Layout() {
  return (
    <div>
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Nosotros</Link></li>
            <li><Link to="/services">Servicios</Link></li>
            <li><Link to="/contact">Contactos</Link></li>
        </nav>
    </div>
  )
}
