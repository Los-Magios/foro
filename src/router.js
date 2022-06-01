import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Home />} />
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
