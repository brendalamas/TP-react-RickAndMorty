import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';


const Section = ()=>{
    return (
        <Container sx={{bgcolor:"#B5B7B9", borderRadius:2, mt:3, p:1}}>
            <CardMedia
            component="img"
            height="200"
            image="https://admiring-keller-046d5a.netlify.app/static/media/banner.7e9a6a7e.png"
            alt="banner rick and morty"
            />
        </Container>
    )
}

export default Section;