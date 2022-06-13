import Nav from '../../layouts/Nav'
import NavLateral from '../../layouts/Nav-lateral'
import FormPregunta from '../../layouts/FormPregunta'

const VerArticulo = () => {
    return(
        <>
            <Nav></Nav>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-2'>
                        <NavLateral></NavLateral>
                    </div>
                    <div className='col-10'>
                        <div className='card'>
                            <h1 className='info-titulo'>Title</h1>
                            <p className='info-articulo'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, voluptas saepe. Minima neque maiores incidunt voluptas a voluptatibus ratione, nisi dignissimos possimus culpa vero deleniti odit autem temporibus placeat animi!</p>
                        </div>
                        <FormPregunta></FormPregunta>
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
            </div>
        </>
    )
}

export default VerArticulo;