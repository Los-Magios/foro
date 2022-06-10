import Nav from "../layouts/Nav";
//import PostsPosts from '../layouts/PostsPosts'
import { Link } from "react-router-dom";

const Proyectos = () => {
  return (
    <>
      <Nav></Nav>
      <div className="container shadow col-sm-6">
        <div className="card mb-3">
          <img
            className="card-img-top"
            src="ejemplo.png"
            alt="Card cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
            <Link className="btn btn-primary" to="#">
              Ingresar
            </Link>
          </div>
        </div>
        <hr />
        <div className="card mb-3">
          <img
            className="card-img-top"
            src="ejemplo.png"
            alt="Card cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
            <Link className="btn btn-primary" to="#">
              Ingresar
            </Link>
          </div>
        </div>
        <hr />
        <div className="card mb-3">
          <img
            className="card-img-top"
            src="ejemplo.png"
            alt="Card cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
            <Link className="btn btn-primary" to="#">
              Ingresar
            </Link>
          </div>
        </div>
        <hr />
        <div className="card mb-3">
          <img
            className="card-img-top"
            src="ejemplo.png"
            alt="Card cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
            <Link className="btn btn-primary" to="#">
              Ingresar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proyectos;
