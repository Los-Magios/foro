import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Articulos from './pages/Articulos'
import Proyectos from './pages/Proyectos'
import Foro from './pages/Foro'

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/foro" element={<Foro />} />
      </Routes>
    </Router>
  )
}

const Routing = () => {
  return (
    <Rutas />
  )
}

export default Routing
