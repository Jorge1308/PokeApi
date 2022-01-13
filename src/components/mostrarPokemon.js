
import { getEspecies, getHabilidades } from "../services/services";
import React, { useState, useEffect } from "react";


export default function MostrarPokemon({ match }) {
    let aux = match.params;
    const [dataDescripcion, setDataDescripcion] = useState([]);
    const [dataHabilidades, setDataHabilidades] = useState([]);
    useEffect(() => {

        async function fetchData() {
            const data = await getEspecies(aux.id);
            setDataDescripcion(data);
            const dataHab = await getHabilidades(aux.id);
            setDataHabilidades(dataHab);
        }
        fetchData();
    }, [aux])

    const listHabilidades = dataHabilidades.map(function (habilidades) {
        console.log(habilidades.ability.name);
        return(<div className="col-sm-2">
            {habilidades.ability.name}
        </div>)
    })

    return (
        <>

            <div class="px-4 py-2 col-sm-12" align="center">
                <h5 class="card-title row center">{aux.nombre}</h5>
                <div className="row col-sm-12">
                    <div class="card col-sm-6 " align="center">
                        <img src={"../../../pokemon/" + aux.imagen + ".png"} class="card-img-top"></img>
                    </div>
                    <div className="col-sm-6">
                        <div>{dataDescripcion.flavor_text}</div>
                        <div className="font-weight-bold"><strong>HABILIDADES:</strong> </div>
                    {listHabilidades}
                    </div>
                    
            </div>
           
            </div>
        </>
    );
}