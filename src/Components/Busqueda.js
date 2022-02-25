import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const Busqueda = ({handleChange})=>{

    return (
        <FormControl sx={{
            display:"flex", flexDirection:"row", 
            justifyContent:"center", alignItems:"center", 
            mt:2, p:3, borderRadius:2
        }}>
            <TextField
                onChange={handleChange}
                label="INICIAR BUSQUEDA"
                variant='standard'
            />
        </FormControl>
    )
}

export default Busqueda;