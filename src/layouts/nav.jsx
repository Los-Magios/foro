import { Link } from "react-router-dom";

const nav = () => {
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
                <Link
                  to="/inicio"
                  className="nav-link active"
                  aria-current="page"
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  Artículos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  Proyectos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  Foro
                </Link>
              </li>
            </ul>
            <button className="btn btn-outline-danger">Cerrar sesión</button>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default nav;
