import Nav from "../layouts/Nav";
// import NavLateral from '../../layouts/Nav-lateral'
import Pagination from "../layouts/Pagination";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"



const Materias = () => {
  return (
    <>
      <Nav></Nav>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="container mt-3 sinfondo">
      <div className="grid">
        <div className="row">
          {/* <div className='col-2'>
                <NavLateral></NavLateral>
              </div> */}
          <div className="col-3 mb-2">
            <motion.div 
              className="card"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
                <div class="card-header">Materia</div>
                <div class="card-body">
                  <Link to="./VerArticulo">Título de artículo</Link>
                  <div class="card-info">
                    Primera oración del contenido del artículo.
                  </div>
                </div>
            </motion.div>
          </div>
          <div className="col-6 mb-2">
            <motion.div 
              className="card"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <div class="card-header">Materia</div>
              <div class="card-body">
                <Link to="./VerArticulo">Título de artículo</Link>
                <div class="card-info">
                  Primera oración del contenido del artículo.
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col-3 mb-2">
            <motion.div 
              className="card"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <div class="card-header">Materia</div>
              <div class="card-body">
                <Link to="./VerArticulo">Título de artículo</Link>
                <div class="card-info">
                  Primera oración del contenido del artículo.
                </div>
              </div>
            </motion.div>
          </div>
          <Pagination></Pagination>
        </div>
      </div>
      </div>
    </>
  );
};

export default Materias;
