import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


const Nav = ()=>{
    return (
        <Container sx={{bgcolor:"#000000",borderRadius:2, mt:3, p:1}}>
            <Box sx={{ display:"flex", justifyContent:"space-between"}} >
                <Button>
                    <img alt="imagen rick"width={120} src="https://admiring-keller-046d5a.netlify.app/static/media/logo.9baa90dc.png"/>
                </Button>
                <Box>
                    <Button  sx={{color:"#33FFC4", fontWeight:"bold"}}> <Link to="/"> Principal</Link></Button >
                    <Button  sx={{color:"#33FFC4", fontWeight:"bold"}}> <Link to="/personajes"> Personajes </Link></Button >
                    <Button  sx={{color:"#33FFC4", fontWeight:"bold"}}> <Link to="/ubicaciones"> Ubicaciones </Link></Button >
                    <Button  sx={{color:"#33FFC4", fontWeight:"bold"}}> <Link to="/episodios"> Episodios </Link></Button >
                </Box>                    
            </Box>
        </Container>
        
    )}

export default Nav;