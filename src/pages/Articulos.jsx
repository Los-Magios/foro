import Nav from '../layouts/Nav'
import FormPosts from "../layouts/FormPosts"

const Articulos = () => {
  return (
    <>
      <Nav></Nav>
      <div className='container'>
        <div className='form-control'>
          <label>Publicar material:</label>
          <FormPosts></FormPosts>
        </div>
      </div>

    </>
  )
}

export default Articulos