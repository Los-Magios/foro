import Nav from "../layouts/Nav";
import NavLateral from "../layouts/Nav-lateral";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";

const Home = () => {
  return (
    <>
      <header>
        <Nav></Nav>

        <div className="p-5 text-center bg-image">
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">IPF.INPUT</h1>
                <h4 className="mb-3">IDK</h4>
                <a
                  className="btn btn-outline-light btn-lg"
                  target="_blank"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  role="button"
                >
                  Ver Video de Presentacion
                </a>
                <div className="container">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint culpa labore corrupti omnis. Eos quisquam consequuntur
                    impedit rem molestias mollitia? Maiores eum ipsa iure
                    mollitia obcaecati! Dolores amet nesciunt repellat!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint culpa labore corrupti omnis. Eos quisquam consequuntur
                    impedit rem molestias mollitia? Maiores eum ipsa iure
                    mollitia obcaecati! Dolores amet nesciunt repellat!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint culpa labore corrupti omnis. Eos quisquam consequuntur
                    impedit rem molestias mollitia? Maiores eum ipsa iure
                    mollitia obcaecati! Dolores amet nesciunt repellat!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint culpa labore corrupti omnis. Eos quisquam consequuntur
                    impedit rem molestias mollitia? Maiores eum ipsa iure
                    mollitia obcaecati! Dolores amet nesciunt repellat!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint culpa labore corrupti omnis. Eos quisquam consequuntur
                    impedit rem molestias mollitia? Maiores eum ipsa iure
                    mollitia obcaecati! Dolores amet nesciunt repellat!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint culpa labore corrupti omnis. Eos quisquam consequuntur
                    impedit rem molestias mollitia? Maiores eum ipsa iure
                    mollitia obcaecati! Dolores amet nesciunt repellat!
                  </p>
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
