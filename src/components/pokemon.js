import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

export const Pokemon = ({pokemons, imagen,show,onHide,muestra}) => {


    
return (

        <div class = "py-2 col-sm-3"> 
            <div class="card " align="center">
            <img src={"./pokemon/"+imagen+".png"} class="card-img-top"></img> 
            <h5 class="card-title">{pokemons.pokemon_species.name}</h5>
            <Link to={{pathname:`/pokemon/${pokemons.entry_number}/${pokemons.pokemon_species.name}/${imagen}`}}>Ver</Link>
        </div>
        </div>
        
    );
}

