import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer =()=>{
    return (
        <Container
        sx={{
            color:"#FFFFFF", 
            bgcolor:"#B5B7B9",
            borderRadius:2,
            display:"flex",
            justifyContent:"space-around",
            alignItems:"center", p:1
            }}>
            <Box>
                <Typography variant="h6" fontWeight={"bold"}> TP React - API Ricky and Morty </Typography> 
                <Typography variant="body1" textAlign="center"> Hecho con ♡ por Brenda Lamas</Typography> 
            </Box>

            <Box sx={{display:"flex"}}>

                <Link color="#FFFFFF" href="https://github.com/brendalamas" underline="none" sx={{m:2}}> 
                    <GitHubIcon sx={{fontSize:35}}/> 
                </Link>

                <Link color="#FFFFFF" href="https://www.linkedin.com/in/brenda-lamas-597b79145/" underline="none" sx={{m:2}}> 
                    <LinkedInIcon sx={{fontSize:35}}/>
                </Link>

                <Link color="#FFFFFF" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" underline="none" sx={{m:2}}> 
                    <EmailIcon sx={{fontSize:35}}/> 
                </Link>

            </Box>

        </Container>
        
    )
}

export default Footer;