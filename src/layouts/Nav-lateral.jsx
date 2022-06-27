import { Link } from "react-router-dom";

const NavLateral = () => {
    return (
        <>
            <div className='bd-sidebar'>
                <form className='bd-search'></form>
                <nav className='nav flex-column'>
                    <Link className='list-group-item nav-lat list-group-item-action' to='../pages/Articulos/Materias'>Estadistica</Link>
                    <Link className='list-group-item nav-lat list-group-item-action' to='#'>Taller de Programación III</Link>
                    <Link className='list-group-item nav-lat list-group-item-action' to='#'>Seminario de Actualización II</Link>
                    <Link className='list-group-item nav-lat list-group-item-action' to='#'>Ingeniería de sistemas</Link>
                </nav>
            </div>
        </>
    )
}

export default NavLateral;