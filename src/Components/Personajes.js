import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

const Personajes = ({busqueda})=>{

    const [characters, setCharacter] = useState ([]);
    
    useEffect(()=>{
        fetch (`https://rickandmortyapi.com/api/character/?name=${busqueda}`)
        .then((res)=>res.json())
        .then(data => {
            setCharacter(data.results);
            console.log(data.results);
        })
    }, [busqueda])

    return (
        <Container sx={{display:"flex", justifyContent:"center"}}>
            <Grid container 
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{mt:3, bgcolor:"#000000", borderRadius:2, width:1055, ml:0, mb:4, p:2}}
                >
                {characters.map((character)=>(
                    <Link to={`/personajes/${character.id}`}>
                    <Grid item>
                        <CardActionArea sx={{width:300}}>
                            <Card>
                                <CardMedia 
                                    component="img"
                                    height="250"
                                    image={character.image}
                                    alt={character.name}
                                />
                                <Typography sx={{textAlign:"center", mb:2, fontWeight:"bold"}} variant="h5">  {character.name} </Typography>
                                <CardContent sx={{display:"flex", flexDirection:"column"}}>
                                    <Typography sx={{m:0.5}} variant="subtitle">GENERO: {character.gender} </Typography>
                                    <Typography sx={{m:0.5}} variant="subtitle"> ESTADO: {character.status} </Typography>
                                    <Typography sx={{m:0.5}} variant="subtitle">ORIGEN: {character.origin.name} </Typography>
                                </CardContent>
                            </Card>
                        </CardActionArea>                                             
                    </Grid>
                    </Link>
                ))}           
                
            </Grid>
        </Container>
                
    )
}

export default Personajes;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Personajes.css";

// const Personajes = () =>{

//     const [personajes, setPersonajes] = useState([]);

//     useEffect(()=>{
//         fetch("https://rickandmortyapi.com/api/character")
//         .then(res => res.json())
//         .then(data => setPersonajes(data.results))
//     }, [])

//     return (
//         <div className="card-contenedor"> 
//             {personajes.map(personaje => (
//                 <Link className="card-personaje" to={`/personajes/${personaje.id}`}> 
//                     <h2>{personaje.name}</h2>
//                     <img src={personaje.image}/>
//                 </Link>
            
//             ))}
//         </div>
//     )
// }

// export default Personajes;