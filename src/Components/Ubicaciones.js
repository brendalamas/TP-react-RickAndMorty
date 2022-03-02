import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';

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
            <Grid container 
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{mt:3, bgcolor:"#B5B7B9", borderRadius:2, ml:0, mb:4, p:2}}>

                {ubicaciones.map(ubicacion => (
                    <Grid item key={ubicacion.id}>
                    <CardActionArea sx={{width:250, m:2}}>
                        <Card sx={{m:2, bgcolor:"#B5B7B9", color:"#ffffff", borderRadius:6, border: "1px solid #B5B7B9"}}> 
                            <CardMedia 
                                component="img"
                                height="130"
                                alt="imagen sobre las ubicaciones"
                                image="https://admiring-keller-046d5a.netlify.app/static/media/01.f47ff45c.png"
                                sx={{borderRadius:0}}
                            />
                            <CardContent sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                                <Typography variant="h5" fontWeight="bold">{ubicacion.name} </Typography>
                                <Typography variant="subtitle2" fontWeight="bold"> {ubicacion.dimension}</Typography>
                                <Typography variant="subtitle2" fontWeight="bold"> {ubicacion.created}</Typography>
                                <Typography variant="subtitle2" fontWeight="bold"> {ubicacion.type}</Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>                                             
                </Grid>
                    
                ))}
            </Grid>
        </Container>
                
    )
}

export default Ubicaciones;
