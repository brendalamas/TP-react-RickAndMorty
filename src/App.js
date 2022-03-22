import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Personajes from "./Components/Personajes";
import DetallePersonaje from "./Components/DetallePersonaje";
import Episodios from "./Components/Episodios";
import Ubicaciones from "./Components/Ubicaciones";
import ErrorNoEncontrado from "./Components/ErrorNoEncontrado";


import Container from '@mui/material/Container';


const App = ()=>{
  
  return (
    <BrowserRouter>
      <Container sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <Nav/>
      </Container>  

      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="*" element={<ErrorNoEncontrado/>}/>
        <Route path="/personajes" element={<Personajes/>}/>
        <Route path="/personajes/:idPersonaje" element={<DetallePersonaje/>}/>
        <Route path="/episodios" element={<Episodios/>}/>
        <Route path="/ubicaciones" element={<Ubicaciones/>}/>

      </Routes>

      <Container sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          <Footer/>
      </Container>

    </BrowserRouter>

  )
}

export default App;