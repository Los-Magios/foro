import Nav from '../../layouts/Nav'
import NavLateral from '../../layouts/Nav-lateral'
import Pagination from '../../layouts/Pagination'

//import Materias from '../articulos.json'

let Titulo = "Medidas de tendencia central"
//let Info = "Las medidas de posición son indicadores estadísticos que permiten resumir los datos en uno solo, o dividir su distribución en intervalos del mismo tamaño. Las medidas de posición, por tanto, sirven para medir y para dividir."

let Titulo2 = "Medidas de variabilidad"
//let Info2 = "Las medidas de posición son indicadores estadísticos que permiten resumir los datos en uno solo, o dividir su distribución en intervalos del mismo tamaño. Las medidas de posición, por tanto, sirven para medir y para dividir."
let Titulo3 = "Medidas de posición"
//let Info3 = "Las medidas de posición son indicadores estadísticos que permiten resumir los datos en uno solo, o dividir su distribución en intervalos del mismo tamaño. Las medidas de posición, por tanto, sirven para medir y para dividir."


const Materias = () => {
    return (
        <>
          <Nav></Nav>
          <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
          <div className='container mt-3 fondonegro'>
            <div className='row'>
              <div className='col-2'>
                <NavLateral></NavLateral>
              </div>
              <div className='col-10'>
                <div className='card w-100'>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{Titulo}</li>
                    <li className="list-group-item">{Titulo2}</li>
                    <li className="list-group-item">{Titulo3}</li>
                  </ul>
                </div>
              </div>
              <Pagination></Pagination>
            </div>
            
          </div>
        </>
    )
}

export default Materias;