import React from "react";
import Nav from "../layouts/Nav";
import Carousel from "../layouts/Carousel";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const VerProyecto = () => {
  return (
    <>
      <Nav></Nav>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="container fondonegro border mt-3 rounded-3">
        <div className="container border">
          <div className="mx-2">
            <i className="fa-solid fa-id-badge"></i>
          </div>
          <div className="col d-flex flex-row justify-content-end">
            <p className="text-muted">Publicado: 13/09/1989 11:11hs</p>
          </div>
          <div>
            {/* <img src="banner.png" className="banner" alt="" /> */}
            <h2 className="text-center container"><u>Nombre de ejemplo</u></h2>
          </div>

          <div className=" mb-3">
            <h3 className="border contbor rounded text-white">Descripción</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              obcaecati cumque ab illo, sapiente eaque necessitatibus hic
              officiis, sit totam, doloribus quos optio quod natus? Ducimus
              sapiente iste aut ut. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Tempore quis minima fugit consequuntur atque sed
              eveniet, doloribus hic dolore earum ex tenetur sapiente ipsam
              quibusdam velit fugiat vitae blanditiis minus.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ipsa
              amet distinctio incidunt eum fugit quos laboriosam blanditiis
              consectetur, maxime rem, nostrum animi sit accusamus, quisquam
              voluptatum quibusdam quia est! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sed dolorum facilis dolores, rerum
              odit dolor et facere optio iusto sequi earum quisquam quo dolore
              porro voluptatum consequatur laborum repellendus est?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              consequatur, ullam at velit id incidunt necessitatibus quaerat
              accusantium modi, dolores consectetur eaque neque, minus eveniet
              quas adipisci eum ut odit!
            </p>
            <h3 className="border contbor rounded text-white">
              Funcionalidades
            </h3>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Funcionalidad 1
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore, perspiciatis eaque similique autem voluptatibus
                    reprehenderit magni ducimus aspernatur quaerat ratione
                    alias. Laboriosam voluptas beatae, exercitationem mollitia
                    error dolorum numquam asperiores?
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Funcionalidad 2
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, facere excepturi reprehenderit illum blanditiis
                    quidem exercitationem cupiditate quisquam possimus aperiam
                    sapiente vitae, tenetur nesciunt veritatis architecto rem,
                    aut earum pariatur?
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Funcionalidad 3
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tenetur placeat sapiente alias nisi. Velit accusantium
                    assumenda distinctio deserunt rem odio debitis incidunt
                    atque repellendus libero, architecto id esse porro?
                    Molestiae!
                  </div>
                </div>
              </div>
            </div>
            {/* <img src="ejemplo.png" width="100%" alt=""/> */}
            <div className="border container carrborder rounded">
              <Carousel></Carousel>
            </div>
            <section className="share-section">
              <ul className="share-links">
                <div className="container">
                  <h4 className="border contbor rounded text-white">
                    Compartir
                  </h4>
                </div>
                <div className="inline border contbor rounded text-white">
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://wa.me/?text=Este foro es genial, hechale un vistazo&amp;url=web.whatsapp.com"
                    title="Compartir vía Whatsapp"
                  >
                    <i className="fa-brands fa-whatsapp-square icono"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/intent/tweet?text=Este foro es genial, échale un vistazo&amp;url=twitter.com"
                    title="Compartir vía Twitter"
                  >
                    <i className="fa-brands fa-twitter icono"></i>
                  </a>
                </li>
                </div>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerProyecto;
