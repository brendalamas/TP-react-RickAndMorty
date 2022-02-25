import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';


const Section = ()=>{
    return (
        <Box sx={{bgcolor:"#CCCCCC", borderRadius:2, mt:3, width:1040, p:1}}>
            <CardMedia
            component="img"
            height="200"
            image="https://admiring-keller-046d5a.netlify.app/static/media/banner.7e9a6a7e.png"
            alt="banner rick and morty"
            />
        </Box>
    )
}

export default Section;