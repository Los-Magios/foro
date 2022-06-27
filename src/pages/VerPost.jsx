import React from "react";
import Nav from "../layouts/Nav";
import FormPregunta from "../layouts/FormPregunta";

const verPost = () => {
  return (
    <>
      <Nav></Nav>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="container fondonegro border my--3 px-5 mt-3 py-3">

        <div>
          <h5 className="text-center">Problema Ejemplo 001</h5>
        </div>

        <div className="col d-flex flex-row justify-content-end">
          <p className="text-muted">Publicado: 06/06/2022 13:04hs</p>
        </div>

        <div className="border mb-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            obcaecati cumque ab illo, sapiente eaque necessitatibus hic
            officiis, sit totam, doloribus quos optio quod natus? Ducimus
            sapiente iste aut ut. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Tempore quis minima fugit consequuntur atque sed
            eveniet, doloribus hic dolore earum ex tenetur sapiente ipsam
            quibusdam velit fugiat vitae blanditiis minus.
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ipsa amet distinctio incidunt eum fugit quos laboriosam blanditiis consectetur, maxime rem, nostrum animi sit accusamus, quisquam voluptatum quibusdam quia est!</p>
        </div>
      </div>
      <div className="container fondonegro border my--3 px-5 mt-3 py-3">
        {/* Preguntar */}
        <div className="border">
          <FormPregunta></FormPregunta><br /><br /><br /><br /><br /><br />
        </div>

        {/* respuestas */}
        <div className="">
          <ul className="list-group list-group-flush list my--3 mt-3">
            <li className="list-group-item px-0 border-bottom">
              <div className="row align-items-center">
                <div className="col-auto">
                  <div className="input-group">
                    <button className="btn btn-success"><i className="far fa-thumbs-up"></i> 5</button>
                    <h6 className="text-primary mx-3 mt-2">Bordón Milagroz</h6>
                  </div>
                </div>
                <div className="col-auto ms--2">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis iure illo explicabo aliquid in fuga corporis maxime at porro eveniet rem et quasi reprehenderit voluptas, hic modi fugit libero earum!</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default verPost;
