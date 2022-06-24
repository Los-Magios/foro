import Nav from "../layouts/Nav";
//import PostsPosts from '../layouts/PostsPosts'
import { Link } from "react-router-dom";
import Buscador from "../layouts/Buscador";
import { motion } from "framer-motion";

const Proyectos = () => {
  return (
    <>
      <Nav></Nav>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="container fondonegro mt-3 shadow col-sm-6">
      <Buscador></Buscador>
        
      <div className="card mb-3">
        <motion.div className='card'
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.99 }}
            >
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
            <Link className="btn btn-primary" to="/verproyecto">
              Ingresar
            </Link>
          </div>
          </motion.div>
        </div>
        <hr />
        <div className="card mb-3">
        <motion.div className='card'
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.99 }}
            >
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
            <Link className="btn btn-primary" to="/verproyecto">
              Ingresar
            </Link>
          </div>
          </motion.div>
        </div>
        <hr />
        <div className="card mb-3">
        <motion.div className='card'
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.99 }}
            >
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
            <Link className="btn btn-primary" to="/verproyecto">
              Ingresar
            </Link>
          </div>
          </motion.div>
        </div>
        <hr />
        <div className="card mb-3">
        <motion.div className='card'
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.99 }}
            >
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
            <Link className="btn btn-primary" to="/verproyecto">
              Ingresar
            </Link>
          </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Proyectos;
