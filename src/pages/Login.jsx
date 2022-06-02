import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content">
      <div className="container">
        <form action="" className='form'>
          <h1>Inicio de sesión</h1>
          <div className='form-group'>
            <label>Usuario</label>
            <input type="text" className='form-control' placeholder="ingrese su nombre de usuario" />
          </div>
          <div className='form-group mb-2'>
            <label>Contraseña</label>
            <input type="text" className='form-control' placeholder="ingrese su contraseña" />
          </div>
          <Link to='/inicio'>
            <button className='btn btn-primary'>Ingresar</button>
          </Link>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login