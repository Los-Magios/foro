import React from "react";

const FormPosts = () => {
  return (
    <>
      <form className="form">
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
    </>
  );
};

export default FormPosts;
