import React from 'react'

const Buscador = () => {
  return (
    <>
      <div class="input-group mb-3 fondonegro">
        <input type="search" placeholder="Buscar" className="form-control" />
        <button className="btn btn-primary"><i className="fas fa-search"></i></button>
      </div>
    </>
  )
}

export default Buscador