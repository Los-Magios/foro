import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <div class="content">
      <div className="container">
      <form action="" className='form'>
        <h1>Inicio de sesión</h1>
        <div className='form-group'>
          <label>Usuario</label>
          <input type="text" className='form-control' name="" id="" />
        </div>
        <div className='form-group mb-2'>
          <label>Contraseña</label>
          <input type="text" className='form-control' />
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