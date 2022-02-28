import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


const Nav = ()=>{
    return (
        <Container sx={{m:0}}>
            <AppBar sx={{
            display: "flex", 
            justifyContent:"center",
            borderRadius:2, 
            p:1,
            bgcolor:"#000000"
            }} position="static">

                <Box sx={{ display:"flex", justifyContent:"space-between"}} >
                    <Button>
                        <img alt="imagen rick"width={120} src="https://admiring-keller-046d5a.netlify.app/static/media/logo.9baa90dc.png"/>
                    </Button>
                    <Box>
                        <Button  sx={{color:"#33FFC4", fontWeight:"bold"}}> <Link to="/"> Principal </Link></Button >
                        <Button  sx={{color:"#33FFC4", fontWeight:"bold"}}> <Link to="/personajes"> Personajes </Link></Button >
                        <Button  sx={{color:"#33FFC4", fontWeight:"bold"}}> <Link to="/ubicaciones"> Ubicaciones </Link></Button >
                        <Button  sx={{color:"#33FFC4", fontWeight:"bold"}}> <Link to="/episodios"> Episodios </Link></Button >
                    </Box>                    
                </Box>

            </AppBar>
        </Container>
        
    )}

export default Nav;