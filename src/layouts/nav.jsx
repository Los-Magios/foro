import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="" className="navbar-brand">
            <img src="favicon.ico" alt="" width="30" height="30" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/inicio" className="nav-link" aria-current="page">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/articulos" className="nav-link">
                  Artículos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/proyectos" className="nav-link">
                  Proyectos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/foro" className="nav-link">
                  Foro
                </Link>
              </li>
            </ul>
                <Link to="/">
                  <button className="btn btn-outline-danger">
                    Cerrar sesión
                  </button>
                </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
