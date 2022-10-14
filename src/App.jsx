import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Producto,
  Perfil,
  Carrito,
  Checkout,
  Login,
  NotFound,
} from "./views";
  function App(){
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="producto/:id" element={<Producto />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="carrito" element={<Carrito />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }


export default App;