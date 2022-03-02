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
            console.log(data);
        })
    }, [busqueda])

    return (
        <Container sx={{display:"flex", justifyContent:"center"}}>
            <Grid container 
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{mt:3, bgcolor:"#B5B7B9", borderRadius:2, ml:0, mb:4, p:2}}
                >
                {characters.map((character)=>(
                    <Link to={`/personajes/${character.id}`}>
                    <Grid item>
                        <CardActionArea sx={{width:300, m:2}}>
                            <Card sx={{m:2, bgcolor:"#B5B7B9", color:"#ffffff", borderRadius:6, border: "1px solid #B5B7B9"}}> 
                                <CardMedia 
                                    component="img"
                                    height="250"
                                    image={character.image}
                                    alt={character.name}
                                    sx={{borderRadius:0}}
                                />
                                <Typography sx={{textAlign:"center",mt:2, fontWeight:"bold"}} variant="h5">  {character.name} </Typography>
                                <CardContent sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                                    <Typography variant="subtitle">{character.species} </Typography>
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
