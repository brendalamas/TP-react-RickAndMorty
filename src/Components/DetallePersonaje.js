import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const DetallePersonaje = ()=>{
    const params = useParams()
    console.log(params.idPersonaje);

    const [detalle, setDetalle] = useState ([])

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${params.idPersonaje}`)
        .then(res=>res.json())
        .then(data => {
            setDetalle(data);
        })
    }, [params.idPersonaje])


    return (
        <div> {detalle.name} </div>
    )
}

export default DetallePersonaje;