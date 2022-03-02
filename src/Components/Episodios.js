import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const Episodios = ()=>{

    const [episodios, setEpispdios] = useState ([]);
    
    useEffect(()=>{
        fetch ("https://rickandmortyapi.com/api/episode")
        .then((res)=>res.json())
        .then(data => {
            console.log(data.results);
            setEpispdios(data.results)
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
                {episodios.map(episodio => (
                    <Box item sx={{
                        display:"flex", flexDirection:"column", alignItems:"center", 
                        m:2, borderRadius:6, border: "1px solid #2BD7A5"}}>
                            <CardMedia
                            component="img"
                            height="150"
                            alt="imagen sobre las ubicaciones"
                            image="https://admiring-keller-046d5a.netlify.app/static/media/01.4d83e3d0.png"/>
                            
                            <CardContent sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                                <Typography variant="h5" fontWeight="bold">{episodio.name} </Typography>
                                <Typography variant="subtitle2" fontWeight="bold"> Air Date: {episodio.air_date}</Typography>
                                <Typography variant="subtitle2" fontWeight="bold"> Episodio: {episodio.episode}</Typography>
                            </CardContent>
                        
                    </Box>
                    
                ))}
            </Box>

        </Container>
                
    )
}

export default Episodios;
