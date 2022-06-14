import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Articulos from './pages/Articulos/Articulos'
import Proyectos from './pages/Proyectos'
import Foro from './pages/Foro'
import Materias from './pages/Articulos/Materias'
import VerPost from './pages/VerPost'
import VerArticulo from './pages/Articulos/VerArticulo'
import FormPost from './layouts/FormPosts'
import VerProyecto from './pages/VerProyecto'


const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/foro" element={<Foro />} />
        <Route path="/verpost" element={<VerPost />} />
        <Route path="/postear" element={<FormPost />} />
        <Route path="/articulos/materias" element={<Materias />} />
        <Route path="/verproyecto" element={<VerProyecto/>} />
        <Route path="/articulos/materias/verarticulo" element={<VerArticulo />} />
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
