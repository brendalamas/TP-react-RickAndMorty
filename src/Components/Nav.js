import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


const Nav = ()=>{
    return (
        <Container sx={{bgcolor:"#B5B7B9",borderRadius:2, mt:3, p:1}}>
            <Box sx={{ display:"flex", justifyContent:"space-between"}} >
                <Button>
                    <img alt="imagen rick"width={120} src="https://admiring-keller-046d5a.netlify.app/static/media/logo.9baa90dc.png"/>
                </Button>
                <Box>
                    <Button> <Link to="/" style={{textDecoration:"none"}}> Principal</Link></Button >
                    <Button> <Link to="/personajes" style={{textDecoration:"none"}}> Personajes </Link></Button >
                    <Button> <Link to="/ubicaciones" style={{textDecoration:"none"}}> Ubicaciones </Link></Button >
                    <Button> <Link to="/episodios" style={{textDecoration:"none"}}> Episodios </Link></Button >
                </Box>                    
            </Box>
        </Container>
        
    )}

export default Nav;