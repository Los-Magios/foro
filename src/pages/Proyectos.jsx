import Nav from "../layouts/Nav";
//import PostsPosts from '../layouts/PostsPosts'
import { Link } from "react-router-dom";

const Proyectos = () => {
  return (
    <>
      <Nav></Nav>
      <div className="container">
        <div class="card text-center w-100">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet hic at officia enim autem? Impedit, debitis illum corrupti voluptatem consequuntur voluptatum perspiciatis optio, veritatis exercitationem recusandae ut error tempora ex!
            </p>
            <Link to="#" class="btn btn-primary">
              Go somewhere
            </Link>
          </div>
          <div class="card-footer text-muted">2 days ago</div>
        </div>
      </div>

      <div className="container">
        <div class="card text-center w-100">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae placeat libero autem adipisci dolorum necessitatibus, sunt inventore, eum mollitia, sequi modi rem quod ratione sit atque commodi nemo. Reiciendis, repellendus.
            </p>
            <Link to="#" class="btn btn-primary">
              Go somewhere
            </Link>
          </div>
          <div class="card-footer text-muted">2 days ago</div>
        </div>
      </div>
    </>
  );
};

export default Proyectos;
