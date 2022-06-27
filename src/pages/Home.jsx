import Nav from "../layouts/Nav";
// import NavLateral from "../layouts/Nav-lateral";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const Home = () => {
  return (
    <>
      <header>
        <Nav></Nav>
        <div className="p-5 text-center bg-image">
          <div className="text-inversionz">
            <h1 className="text-inversionz">IPF.INPUT</h1>
          </div>
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="contenido d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">IPF.INPUT</h1>
                <h4 className="mb-3">IDK</h4>
                <a
                  className="btn btn-outline-light btn-lg"
                  target="_blank"
                  rel="noreferrer"
                  href="https://pbs.twimg.com/media/EBqAPZDXkAAp1sD.jpg"
                  role="button"
                >
                  Ver presentación
                </a>
                <div className="container jomtex">
                  <div className="row">
                    <p className="col-6">
                      <p>IPF</p>
                      El sector de Desarrollo de Software es cada vez más
                      necesario, por ello la importancia de la comunicación
                      entre estudiantes y futuros desarrolladores es esencial
                      para destacar la interacción social en equipos de trabajo
                      y con ello, reflejar cualidades en el potencial de
                      profesionales del área en la provincia de Formosa.
                    </p>
                    <p className="col-6">
                      <p>INPUT</p>
                      En software, el “input” es un elemento que permite recibir
                      datos de un usuario. Al ser dinámico y contar con variedad
                      de tipos de entrada de datos, la inclusión en el nombre
                      del foro es representativa de lo que se busca lograr en
                      términos de comunicación, ya que no nos limitamos a
                      mostrar contenido, sino también a recibir
                      retroalimentación.
                    </p>
                    <p className="p-4">
                      Teniendo en cuenta lo planteado, nació IPF.INPUT, una
                      plataforma web que ofrece información para potenciar la
                      formación de desarrolladores, fomentar la comunicación
                      entre futuros profesionales y servir como guía y
                      demostración de lo que se podría lograr con la aplicación
                      de sistemas de software en distintos campos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
    </>
  );
};

export default Home;
