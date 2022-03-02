import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const Ubicaciones = ()=>{

    const [ubicaciones, setUbicaciones] = useState ([]);
    
    useEffect(()=>{
        fetch ("https://rickandmortyapi.com/api/location")
        .then((res)=>res.json())
        .then(data => {
            console.log(data.results);
            setUbicaciones(data.results)
        })
    }, [])

    return (
        <Container sx={{display:"flex", justifyContent:"center"}}>
            <Box sx={{
                bgcolor:"#000000",color:"#2BD7A5", 
                borderRadius:2, width:1055, 
                display:"flex", justifyContent:"center", flexWrap:"wrap",
                p:2, mb:3}}
            >
                {ubicaciones.map(ubicacion => (
                    <Box item sx={{
                        display:"flex", flexDirection:"column", alignItems:"center", 
                        m:2, borderRadius:6, border: "1px solid #2BD7A5"}}>
                            <CardMedia
                            component="img"
                            height="150"
                            alt="imagen sobre las ubicaciones"
                            image="https://admiring-keller-046d5a.netlify.app/static/media/01.f47ff45c.png"/>
                            
                            <CardContent sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                                <Typography variant="h5" fontWeight="bold">{ubicacion.name} </Typography>
                                <Typography variant="subtitle2" fontWeight="bold"> {ubicacion.dimension}</Typography>
                                <Typography variant="subtitle2" fontWeight="bold"> {ubicacion.created}</Typography>
                                <Typography variant="subtitle2" fontWeight="bold"> {ubicacion.type}</Typography>
                            </CardContent>
                        
                    </Box>
                    
                ))}
            </Box>

        </Container>
                
    )
}

export default Ubicaciones;
