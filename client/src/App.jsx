import { Route, Routes } from 'react-router-dom';

import './App.css'
import { NavBar } from './components/navBar/NavBar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { CrearProducto } from './pages/producto/Crear';
import { EditarProducto } from './pages/producto/Modificar';
import { Productos } from './pages/producto/Productos';
import { ProductosUsuario } from './pages/producto/ProductosUsuario';
import { RegistroUsuario } from './pages/RegistroUsuario';



function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registrar' element={<RegistroUsuario />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/productos/editar' element={<EditarProducto />} />
        <Route path='/productos/crear' element={<CrearProducto />} />
        <Route path='/productos/:prid' element={<EditarProducto />} />
      </Routes>
    </div>
  )
}

export default App
