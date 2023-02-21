import { Container } from "react-bootstrap";
import { Routes, Route, Outlet } from 'react-router-dom';
import Products from "./components/home/products";
import Menu from "./components/menu/Menu";
import Auth from "./Controlpanel/auth";
import { AuthProvider } from './Controlpanel/AuthContext'
import ManageProd from "./Controlpanel/mangeProd";
import ProtectedRoutes from "./Controlpanel/protectedRoutes";

function App() {
  return (
   <AuthProvider>
    <Container>
    <Menu/>
    <Outlet />
    {/**-----------Routes----------------------- */}
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/login' element={<Auth/>} />
        {/**-----------routes protegees-------- */}
        <Routes element={<ProtectedRoutes/>}>
          <Route path='/manageproducts' element={<ManageProd/>}/>
        </Routes>
   </Routes>
   </Container>
   </AuthProvider>
  );
}

export default App;
