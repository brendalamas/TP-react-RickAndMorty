import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';

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
            <Grid container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{mt:3, bgcolor:"#B5B7B9", borderRadius:2, ml:0, mb:4, p:2}}>

                {episodios.map(episodio => (
                    <Grid item>
                        <CardActionArea sx={{width:300, m:2}}>
                            <Card sx={{m:2, bgcolor:"#B5B7B9", color:"#ffffff", borderRadius:6, border: "1px solid #B5B7B9"}}> 
                                <CardMedia 
                                    component="img"
                                    height="150"
                                    alt="imagen sobre los episodios"
                                    image="https://admiring-keller-046d5a.netlify.app/static/media/01.4d83e3d0.png"
                                    sx={{borderRadius:0}}
                                />
                                <CardContent sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                                    <Typography variant="h5" fontWeight="bold">{episodio.name} </Typography>
                                    <Typography variant="subtitle2" fontWeight="bold"> Air Date: {episodio.air_date}</Typography>
                                    <Typography variant="subtitle2" fontWeight="bold"> Episodio: {episodio.episode}</Typography>
                                </CardContent>
                            </Card>
                        </CardActionArea> 
                    </Grid>
                ))}

            </Grid>
            

        </Container>
                
    )
}

export default Episodios;
