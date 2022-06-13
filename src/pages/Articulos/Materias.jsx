import Nav from '../../layouts/Nav'
// import NavLateral from '../../layouts/Nav-lateral'
import Pagination from '../../layouts/Pagination'
import { Link } from "react-router-dom";

//import Materias from '../articulos.json'

//let Info3 = "Las medidas de posición son indicadores estadísticos que permiten resumir los datos en uno solo, o dividir su distribución en intervalos del mismo tamaño. Las medidas de posición, por tanto, sirven para medir y para dividir."


const Materias = () => {
    return (
        <>
          <Nav></Nav>
          <div className='container-fluid'>
            <div className='row'>
              {/* <div className='col-2'>
                <NavLateral></NavLateral>
              </div> */}
              <div className='col-3'>
                <div className='card'>
                  <h6 >Materia</h6>
                  <h3 className='info-titulo'><Link to='./VerArticulo'>Título de artículo</Link></h3>
                  <p className='info-articulo'>Primera oración del contenido del artículo.</p>
                </div>
              </div>
              <div className='col-6'>
                <div className='card'>
                  <h3>Materia</h3>
                  <h1><Link to='./VerArticulo'>Título de artículo</Link></h1>
                  <p>Primera oración del contenido del artículo.</p>
                </div>
              </div>
              <div className='col-3'>
                <div className='card'>
                  <h3>Materia</h3>
                  <h1><Link to='./VerArticulo'>Título de artículo</Link></h1>
                  <p>Primera oración del contenido del artículo.</p>
                </div>
              </div>
              <Pagination></Pagination>
            </div>
            
          </div>
        </>
    )
}

export default Materias;