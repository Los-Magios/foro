import React from 'react'

const FormPosts = () => {
  return (
    <>
      <div className='container'>
        <form className='form'>
          <div className='form-group'>
            <label>Título</label>
            <input type="text" className='form-control' />
          </div>
          <div className='form-group'>
            <label>Descripción</label>
            <input type="text" className='form-control' />
          </div>
          <button className='btn btn-success'>Enviar</button>
        </form>
      </div>
    </>
  )
}

export default FormPosts