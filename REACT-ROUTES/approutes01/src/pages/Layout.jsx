import { NavLink, Outlet } from "react-router-dom"

function Layout() {
    const style ={
        marginLeft:20,
        marginRight:15,
        border:1,
        textDecoration: 'none',
        color: 'black',
    }
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item"><NavLink to='/' style={style}>Home</NavLink></li>
        <li className="nav-item"><NavLink to='/about' style={style}>About</NavLink></li>
        <li className="nav-item"><NavLink to='/services' style={style}>Services</NavLink></li>
        <li className="nav-item"><NavLink to='/contact' style={style}>Contact</NavLink></li>
      </ul>
    </div>
  </div>
</nav>
      <hr />
      <hr />
      <Outlet />
    </div>
  )
}

export default Layout
