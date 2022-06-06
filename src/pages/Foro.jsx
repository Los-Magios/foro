// import FormPosts from "../layouts/FormPosts";
import { Link } from "react-router-dom";
import Nav from "../layouts/Nav";

const Foro = () => {
  return (
    <>
      <Nav />
      <div className="container border-0 shadow h-100 my--3 px-5">
        <div className="row my-3">
          <div className="col text-center">
            <h4 className="mt-3">PREGUNTAS</h4>
          </div>
          <div className="col text-center">
            <button className="btn btn-primary mt-3">Preguntar</button>
          </div>
        </div>

        <ul className="list-group list-group-flush list my--3">
          <li className="list-group-item px-0 border-bottom">
            <div className="row align-items-center ">
              <div className="col-auto">
                <div>
                  <i className="far fa-thumbs-up"></i>5
                </div>
                <div>
                  <i className="far fa-solid fa-comments"></i>2
                </div>
              </div>
              <div className="col-auto ms--2">
                <Link to="/inicio" className="text-decoration-none text-reset">
                  <h4 className="h6 mt-1">Problema Ejemplo 001</h4>
                </Link>
              </div>
            </div>
          </li>

          <li className="list-group-item px-0 border-bottom">
            <div className="row align-items-center">
              <div className="col-auto">
                <div>
                  <i className="far fa-thumbs-up"></i>5
                </div>
                <div>
                  <i className="far fa-solid fa-comments"></i>2
                </div>
              </div>
              <div className="col-auto ms--2">
                <Link to="/inicio" className="text-decoration-none text-reset">
                  <h4 className="h6 mt-1">Problema Ejemplo 002</h4>
                </Link>
              </div>
            </div>
          </li>

          <li className="list-group-item px-0 border-bottom">
            <div className="row align-items-center">
              <div className="col-auto">
                <div>
                  <i className="far fa-thumbs-up"></i>5
                </div>
                <div>
                  <i className="far fa-solid fa-comments"></i>2
                </div>
              </div>
              <div className="col-auto ms--2">
                <Link to="/inicio" className="text-decoration-none text-reset">
                  <h4 className="h6 mt-1">Problema Ejemplo 003</h4>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Foro;
