import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const DetallePersonaje = ()=>{
    const params = useParams()
    console.log(params.idPersonaje);

    const [detalle, setDetalle] = useState ([])

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${params.idPersonaje}`)
        .then(res=>res.json())
        .then(data => {
            setDetalle(data);
            console.log(data);
        })
    }, [params.idPersonaje])


    return (
        <Container 
        sx={{display:"flex", justifyContent:"center", mt:3, mb:3}}>
            <Card 
            sx={{display:"flex", justifyContent:"space-around", 
            width:400, height:150, bgcolor:"#000000", p:2}}>

            <CardMedia
            component="img"
            height="150"
            image={detalle.image}
            alt="imagen del personaje"
            sx={{width:150}}/>


            <Box sx={{mt:2}}>
                <Typography variant="h5" fontWeight="bold" color="#24FFB8" sx={{mb:2}}>{detalle.name} </Typography>

                <Typography variant="subtitle2" fontWeight="bold" color="#24FFB8"> 
                    Genero: {detalle.gender} 
                </Typography>

                {detalle.status === "Alive" && 
                <Typography sx={{color:"green"}} variant="subtitle2" fontWeight="bold">
                    Estado: {detalle.status} 
                </Typography>}

                {detalle.status === "Dead" && 
                <Typography sx={{color:"red"}} variant="subtitle2" fontWeight="bold">
                    Estado: {detalle.status} 
                </Typography>}

                {detalle.status === "Unknown" && 
                <Typography sx={{color:"yellow"}} variant="subtitle2" fontWeight="bold">
                    Estado: {detalle.status} 
                </Typography>} 

                <Typography variant="subtitle2"fontWeight="bold" color="#24FFB8"> 
                    Especie: {detalle.species} 
                </Typography>
            </Box>
            </Card>

        </Container>
    )
}

export default DetallePersonaje;
