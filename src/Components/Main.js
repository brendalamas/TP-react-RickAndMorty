import { CardMedia } from '@mui/material';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import "./Main.css"

const Main = ()=>{
    return (
        <Container>
        <Paper sx={{display:"flex", justifyContent:"center", borderRadius:2, bgcolor:"#000000", mb:5, p:1}} elevation={3}>
            <CardMedia
            component="img"
            height="800"
            image="https://admiring-keller-046d5a.netlify.app/static/media/main.751e8967.png"
            alt="imagen principal rick and morty"
            />
        </Paper>
        </Container>
    )
}

export default Main;