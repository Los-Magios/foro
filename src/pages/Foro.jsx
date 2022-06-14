// import FormPosts from "../layouts/FormPosts";
import { Link } from "react-router-dom";
import Nav from "../layouts/Nav";
import Buscador from "../layouts/Buscador"

const Foro = () => {
  return (
    <>
      <Nav />
      <div className="container border-0 shadow h-100 my--3 px-5">
        <Buscador />
        <div className="row my-3">
          <div className="col text-center">
            <h4 className="mt-3">PREGUNTAS</h4>
          </div>
          <div className="col text-center">
            <Link to='/postear'>
              <button className="btn btn-primary mt-3">Preguntar</button>
            </Link>
          </div>
        </div>

        <ul className="list-group list-group-flush list my--3 pb-3">

          <li className="list-group-item px-0 border-bottom mx-5">
            <div className="row align-items-center mx-4">
              <div className="col-auto ms--2">
                <Link to="/verpost" className="text-decoration-none text-reset">
                  <h4 className="h6 mt-1">Problema Ejemplo 001</h4>
                </Link>
              </div>
              <div className="col d-flex justify-content-end">
                <div className="mx-2">
                  <i className="far fa-thumbs-up"></i>5
                </div>
                <div>
                  <i className="far fa-solid fa-comments"></i>2
                </div>
              </div>
            </div>
          </li>

          <li className="list-group-item px-0 border-bottom mx-5">
            <div className="row align-items-center mx-4">
              <div className="col-auto ms--2">
                <Link to="/verpost" className="text-decoration-none text-reset">
                  <h4 className="h6 mt-1">Problema Ejemplo 002</h4>
                </Link>
              </div>
              <div className="col d-flex justify-content-end">
                <div className="mx-2">
                  <i className="far fa-thumbs-up"></i>5
                </div>
                <div>
                  <i className="far fa-solid fa-comments"></i>2
                </div>
              </div>
            </div>
          </li>

          <li className="list-group-item px-0 border-bottom mx-5">
            <div className="row align-items-center mx-4">
              <div className="col-auto ms--2">
                <Link to="/verpost" className="text-decoration-none text-reset">
                  <h4 className="h6 mt-1">Problema Ejemplo 003</h4>
                </Link>
              </div>
              <div className="col d-flex justify-content-end">
                <div className="mx-2">
                  <i className="far fa-thumbs-up"></i>5
                </div>
                <div>
                  <i className="far fa-solid fa-comments"></i>2
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Foro;
