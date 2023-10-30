import './App.css';
import MiniDrawer from './components/menu/sidebar';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Empresa from './pages/quienes-somos/empresa';
import ComoFunciona from './pages/como-funciona/como-funciona';
import Postularse from './pages/postularse/postularse';
import Precios from './pages/precios/precios';
import Aplicacion from './pages/app/aplicacion';


function App() {

  return (
    <Router>
      <MiniDrawer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<Empresa />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/postularse" element={<Postularse />} />
        <Route path="/tarifas" element={<Precios />} />
        <Route path="/aplicacion" element={<Aplicacion />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;