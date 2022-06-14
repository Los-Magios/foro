import React from "react";
import Nav from "../layouts/Nav";
import Carousel from "../layouts/Carousel";

const VerProyecto = () => {
  return (
    <>
      <Nav></Nav>
      <div className="container border mt-3">
        <div>
          <img src="banner.png" alt="" />
          <h2 className="text-center">Nombre de ejemplo</h2>
        </div>

        <div className="col d-flex flex-row justify-content-end">
          <p className="text-muted">Publicado: 99/99/9999 99:99hs</p>
        </div>

        <div className=" mb-3">
          <h3>Descripción</h3>
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
          <h3>Funcionalidades</h3>
          <ul>
            <li>Primer funcionalidad</li>
            <li>Segunda funcionalidad</li>
            <li>Tercer funcionalidad</li>
          </ul>
          {/* <img src="ejemplo.png" width="100%" alt=""/> */}
          <Carousel></Carousel>
          <section className="share-section">
            <ul class="share-links">
              <h4>Compartir</h4>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.me/?text=Este foro es genial, hechale un vistazo&amp;url=web.whatsapp.com"
                  title="Compartir vía Whatsapp"
                >
                  <i class="fa-brands fa-whatsapp-square"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/intent/tweet?text=Este foro es genial, hechale un vistazo&amp;url=twitter.com"
                  title="Compartir vía Twitter"
                >
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default VerProyecto;
