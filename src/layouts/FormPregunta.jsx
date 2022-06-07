import React from "react";

const FormPregunta = () => {
  return (
    <>
      <form className="form">
        <div className="form-control">
          <div className="form-group mb-2">
            <h5>Responder</h5>
            <textarea className="form-control"></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Responder</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormPregunta;
