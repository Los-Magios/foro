import Nav from "../layouts/Nav";
//import PostsPosts from '../layouts/PostsPosts'
import { Link } from "react-router-dom";

const Proyectos = () => {
  return (
    <>
      <Nav></Nav>
      <div className="container">
        <div className="card">
          <img className="card-img-top" src="..." alt="Card cap"></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="#" className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proyectos;
