import Nav from "./Components/Nav";
import Section from "./Components/Section";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Busqueda from "./Components/Busqueda";
import Container from '@mui/material/Container';
import { useState } from "react";

const App = ()=>{
  
  const [busqueda, setBusqueda] = useState ("")

  const handleChange = (e)=>{
      setBusqueda(e.target.value)
  }

  return (
    <Container sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <Nav/>
        <Section/>
        <Busqueda
        handleChange={handleChange}/>
        <Main busqueda={busqueda}/>
        <Footer/>
    </Container>
  )
}

export default App;