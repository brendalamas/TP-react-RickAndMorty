import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const Footer =()=>{
    return (
        <Container
        sx={{
            color:"#33FFC4", 
            bgcolor:"#000000",
            borderRadius:2,
            display:"flex",
            justifyContent:"space-around",
            alignItems:"center",
            }}>
            <Box>
                <Typography> TP React - API Ricky and Morty </Typography> 
            </Box>

            <Box sx={{display:"flex", flexDirection:"column"}}>
            <Link color="#33FFC4" href="https://github.com/brendalamas" underline="none"> {'GitHub'} </Link>
            <Link color="#33FFC4" href="https://www.linkedin.com/in/brenda-lamas-597b79145/" underline="none"> {'LinkedIn'} </Link>
            <Link color="#33FFC4" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" underline="none"> {'Gmail'} </Link>
            </Box>

        </Container>
        
    )
}

export default Footer;