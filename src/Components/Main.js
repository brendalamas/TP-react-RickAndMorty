import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from "react";

const Main = ({busqueda})=>{

    const [personajes, setPersonajes] = useState ([])
    
    useEffect(()=>{
        fetch (`https://rickandmortyapi.com/api/character/?name=${busqueda}`)
        .then((res)=>res.json())
        .then(data => {
            setPersonajes(data.results);
        })
    }, [busqueda])

    return (
        <Container sx={{display:"flex", justifyContent:"center"}}>
            <Grid 
                container 
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{mt:3, bgcolor:"#000000", borderRadius:2, width:1055, ml:0, mb:4, p:2}}
            >
                {personajes.map((personaje)=>(
                    <Grid item>
                        <CardActionArea sx={{width:300}}>
                            <Card>
                                <CardMedia 
                                    component="img"
                                    height="250"
                                    image={personaje.image}
                                    alt={personaje.name}
                                />

                                <Typography sx={{textAlign:"center", mb:2, fontWeight:"bold"}} variant="h5">  {personaje.name} </Typography>
                                <CardContent sx={{display:"flex", flexDirection:"column"}}>
                                    <Typography sx={{m:0.5}} variant="subtitle">GENERO: {personaje.gender} </Typography>
                                    <Typography sx={{m:0.5}} variant="subtitle"> ESTADO: {personaje.status} </Typography>
                                    <Typography sx={{m:0.5}} variant="subtitle">ORIGEN: {personaje.origin.name} </Typography>
                                </CardContent>
                            </Card>
                        </CardActionArea>                                             
                    </Grid>
                ))}           
            </Grid>
        </Container>
                
    )
}

export default Main;