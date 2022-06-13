import React from "react";
import Nav from './Nav'

const FormPosts = () => {
  return (
    <>
      <Nav></Nav>
      <div className="container border-0 shadow h-100 my--3 px-5 my-3">
        <form className="form py-3">
          <div className="form-group">
            <label>Título</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Descripción</label>
            <textarea className="form-control"></textarea>
          </div>
          <button className="btn btn-success mt-2">Publicar</button>
        </form>
      </div>
    </>
  );
};

export default FormPosts;
