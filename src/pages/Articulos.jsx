import Nav from "../layouts/Nav";
//import ArticulosMateria from "./Articulos-materia";
import { Link } from "react-router-dom";

const Articulos = (Articulos) => {
  return (
    <>
      <Nav></Nav>
      <div className="container">
        <div className="form-control">
          <div className="card">
            <Link to="/Articulos-materia">Estadística</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articulos;
