import { Link } from "react-router-dom"


const Pagination = () => {
    <div className='row align-items-end'>
        <nav>
        <ul className="pagination">
            <li className='page-item'><Link className="page-link" to="#">1</Link></li>
            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
        </ul>
        </nav>
    </div>
}

export default Pagination;