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
                        <img width={120} src="https://admiring-keller-046d5a.netlify.app/static/media/logo.9baa90dc.png"/>
                    </Button>
                    <Box>
                        <Button  sx={{color:"#33FFC4", fontWeight:"bold"}}> Personajes</Button >
                        <Button sx={{color:"#33FFC4", fontWeight:"bold"}}> Ubicaciones </Button>
                        <Button sx={{color:"#33FFC4", fontWeight:"bold"}}> Episodios</Button>
                    </Box>                    
                </Box>

            </AppBar>
        </Container>
        
    )}

export default Nav;