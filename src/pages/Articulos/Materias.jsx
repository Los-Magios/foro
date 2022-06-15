import Nav from "../../layouts/Nav";
// import NavLateral from '../../layouts/Nav-lateral'
import Pagination from "../../layouts/Pagination";
import { Link } from "react-router-dom";

//import Materias from '../articulos.json'

//let Info3 = "Las medidas de posición son indicadores estadísticos que permiten resumir los datos en uno solo, o dividir su distribución en intervalos del mismo tamaño. Las medidas de posición, por tanto, sirven para medir y para dividir."

const Materias = () => {
  return (
    <>
      <Nav></Nav>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="container mt-3 fondonegro">
        <div className="row">
          {/* <div className='col-2'>
                <NavLateral></NavLateral>
              </div> */}
          <div className="col-3">
            <div className="card">
              <div class="card-header">Materia</div>
              <div class="card-body">
                <Link to="./VerArticulo">Título de artículo</Link>
                <div class="card-info">
                  Primera oración del contenido del artículo.
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div class="card-header">Materia</div>
              <div class="card-body">
                <Link to="./VerArticulo">Título de artículo</Link>
                <div class="card-info">
                  Primera oración del contenido del artículo.
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div class="card-header">Materia</div>
              <div class="card-body">
                <Link to="./VerArticulo">Título de artículo</Link>
                <div class="card-info">
                  Primera oración del contenido del artículo.
                </div>
              </div>
            </div>
          </div>
          <Pagination></Pagination>
        </div>
      </div>
    </>
  );
};

export default Materias;
