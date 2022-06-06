// import FormPosts from "../layouts/FormPosts";
import Nav from "../layouts/Nav";

const Foro = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="card mt-2 mb-2">
          <div className="card-body">
            <div className="row">
              <div className="col text-center"><h4>PREGUNTAS</h4></div>
              <div className="col text-center"><button className="btn btn-primary">Realizar una pregunta</button></div>
            </div>
            <div className="card mt-2 mb-2">
              <div className="card-body">
                <div className="input-group">
                  <h6 className="mx-1">
                    <i class="far fa-thumbs-up"></i>
                  </h6>
                  <h6>3</h6>
                  <h6 className="mx-2">Problema Ejemplo 001</h6>
                  <button className="btn btn-info">view</button>
                </div>
              </div>
            </div>
            <div className="card mt-2 mb-2">
              <div className="card-body">
                <div className="input-group">
                  <h6 className="mx-1">
                    <i class="far fa-thumbs-up"></i>
                  </h6>
                  <h6>7</h6>
                  <h6 className="mx-2">Problema Ejemplo 002</h6>
                </div>
              </div>
            </div>
            <div className="card mt-2 mb-2">
              <div className="card-body">
                <div className="input-group">
                  <h6 className="mx-1">
                    <i class="far fa-thumbs-up"></i>
                  </h6>
                  <h6>2</h6>
                  <h6 className="mx-2">Problema Ejemplo 003</h6>
                </div>
              </div>
            </div>
            <div className="card mt-2 mb-2">
              <div className="card-body">
                <div className="input-group">
                  <h6 className="mx-1">
                    <i class="far fa-thumbs-up"></i>
                  </h6>
                  <h6>4</h6>
                  <h6 className="mx-2">Problema Ejemplo 004</h6>
                </div>
              </div>
            </div>
            <div className="card mt-2 mb-2">
              <div className="card-body">
                <div className="input-group">
                  <h6 className="mx-1">
                    <i class="far fa-thumbs-up"></i>
                  </h6>
                  <h6>2</h6>
                  <h6 className="mx-2">Problema Ejemplo 005</h6>
                </div>
              </div>
            </div>
            <div className="card mt-2 mb-2">
              <div className="card-body">
                <div className="input-group">
                  <h6 className="mx-1">
                    <i class="far fa-thumbs-up"></i>
                  </h6>
                  <h6>1</h6>
                  <h6 className="mx-2">Problema Ejemplo 006</h6>
                </div>
              </div>
            </div>
            <div className="card mt-2 mb-2">
              <div className="card-body">
                <div className="input-group">
                  <h6 className="mx-1">
                    <i class="far fa-thumbs-up"></i>
                  </h6>
                  <h6>6</h6>
                  <h6 className="mx-2">Problema Ejemplo 007</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Foro;
