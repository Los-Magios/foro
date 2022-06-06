import Nav from '../layouts/Nav'
//import Materias from '../articulos.json'

let Titulo = "Medidas de posición"
let Info = "Las medidas de posición son indicadores estadísticos que permiten resumir los datos en uno solo, o dividir su distribución en intervalos del mismo tamaño. Las medidas de posición, por tanto, sirven para medir y para dividir."

const ArticulosMateria = () => {
    return (
        <>
          <Nav></Nav>
          <div className='container'>
            <div className='form-control'>
                <p><strong>{Titulo}</strong></p>
                <p>{Info}</p>
            </div>
          </div>
        </>
    )
}

export default ArticulosMateria;