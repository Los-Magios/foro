import Nav from "../layouts/Nav";
//import ArticulosMateria from "./Articulos-materia";
import { Link } from "react-router-dom";
import Buscador from "../layouts/Buscador";

const Articulos = () => {
  return (
    <>
      <Nav></Nav>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className='container-fluid mt-3'>
        <Buscador></Buscador>
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-4'>
            <div className='card'>
              <div className='card-header'>
                1° año: Primer cuatrimestre
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Arquitectura y Sistemas Operativos</h5>
                <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
                <Link to='./Materias' className='btn btn-primary'>Ver artículos</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-4'>
            <div className='card'>
              <div className='card-header'>
                1° año: Primer cuatrimestre
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Algoritmos y Estructuras de datos</h5>
                <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
                <Link to='./Materias' className='btn btn-primary'>Ver artículos</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-4'>
            <div className='card'>
              <div className='card-header'>
                1° año: Primer cuatrimestre
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Taller de Lenguajes de Programación I</h5>
                <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
                <Link to='./Materias' className='btn btn-primary'>Ver artículos</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-4'>
            <div className='card'>
              <div className='card-header'>
                1° año: Primer cuatrimestre
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Base de Datos I</h5>
                <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
                <Link to='./Materias' className='btn btn-primary'>Ver artículos</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-4'>
            <div className='card'>
              <div className='card-header'>
                1° año: Primer cuatrimestre
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Proyecto de Integración I</h5>
                <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
                <Link to='./Materias' className='btn btn-primary'>Ver artículos</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-4'>
            <div className='card'>
              <div className='card-header'>
                1° año: Primer cuatrimestre
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Matemática Aplicada I</h5>
                <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
                <Link to='./Materias' className='btn btn-primary'>Ver artículos</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-4'>
            <div className='card'>
              <div className='card-header'>
                1° año: Primer cuatrimestre
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Inglés I</h5>
                <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
                <Link to='./Materias' className='btn btn-primary'>Ver artículos</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-4'>
            <div className='card'>
              <div className='card-header'>
                1° año: Primer cuatrimestre
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Tecnología y Sociedad</h5>
                <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
                <Link to='./Materias' className='btn btn-primary'>Ver artículos</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-4'>
            <div className='card'>
              <div className='card-header'>
                1° año: Segundo cuatrimestre
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Taller de Programación II</h5>
                <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
                <Link to='./Materias' className='btn btn-primary'>Ver artículos</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-4'>
            <div className='card'>
              <div className='card-header'>
                1° año: Segundo cuatrimestre
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Ingeniería de Software I</h5>
                <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
                <Link to='./Materias' className='btn btn-primary'>Ver artículos</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-4'>
            <div className='card'>
              <div className='card-header'>
                1° año: Segundo cuatrimestre
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Base de Datos II</h5>
                <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
                <Link to='./Materias' className='btn btn-primary'>Ver artículos</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-4'>
            <div className='card'>
              <div className='card-header'>
                1° año: Segundo cuatrimestre
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Proyecto de Integración II</h5>
                <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
                <Link to='./Materias' className='btn btn-primary'>Ver artículos</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-4'>
            <div className='card'>
              <div className='card-header'>
                1° año: Segundo cuatrimestre
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Seminarios y Talleres de Actualización I</h5>
                <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
                <Link to='./Materias' className='btn btn-primary'>Ver artículos</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-4'>
            <div className='card'>
              <div className='card-header'>
                1° año: Segundo cuatrimestre
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Matemática Aplicada II</h5>
                <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
                <Link to='./Materias' className='btn btn-primary'>Ver artículos</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-4'>
            <div className='card'>
              <div className='card-header'>
                1° año: Segundo cuatrimestre
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Inglés II</h5>
                <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
                <Link to='./Materias' className='btn btn-primary'>Ver artículos</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-4'>
            <div className='card'>
              <div className='card-header'>
                1° año: Segundo cuatrimestre
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Inglés II</h5>
                <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
                <Link to='./Materias' className='btn btn-primary'>Ver artículos</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articulos;
