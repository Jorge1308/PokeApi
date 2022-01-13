import React, { useState, useEffect } from "react";
import {Pokemon} from './pokemon';
import {getPokemon} from '../services/services'
export default function List  ()  {

    const [dataPokemon, setPokemon] = useState([]);
useEffect(() =>{
    async function fetchData(){
        const data = await getPokemon();
        setPokemon(data);
        console.log(data);
    }
    fetchData();
},[])


const listPokemon = dataPokemon.map(function(pokemons) {
    if (pokemons.entry_number < 10) {
        var img = "00" + pokemons.entry_number;
    }
    if (pokemons.entry_number < 100 && pokemons.entry_number >= 10) {
        var img = "0" + pokemons.entry_number;
    }

    if (pokemons.entry_number <= 151 && pokemons.entry_number >= 100) {
        var img = pokemons.entry_number;
    }
    return(<><Pokemon key={pokemons.entry_number} pokemons = {pokemons} imagen={img} ></Pokemon></>)
})

    return (
        <div>
        <div className="container mt-5 white" align="center">
        <h1 >Pokedex</h1> 
                        <input type="text" name="filter" id="filter"></input>
                        <div className="form-check form-switch">
                 
                        <label className="form-check-label" for="filter">Filter</label>
                        </div>
        </div>
        <div className="row col-sm-12" >
            {
                listPokemon
            }
        </div>
        </div>
    );
}