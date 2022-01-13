import React, { useState, useEffect } from "react";
import { Pokemon } from './pokemon';
import { getPokemon } from '../services/services';

export default function List() {

    const [dataPokemon, setPokemon] = useState([]);
    const [estadoNombre, setEstadoNombre] = useState([])
    useEffect(() => {
        async function fetchData() {

            const data = await getPokemon();
            setPokemon(data);
            setEstadoNombre(data);
        }
        fetchData();
    }, [])


    const listPokemon = dataPokemon.map(function (pokemons) {
        if (pokemons.entry_number < 10) {
            var img = "00" + pokemons.entry_number;
        }
        if (pokemons.entry_number < 100 && pokemons.entry_number >= 10) {
            var img = "0" + pokemons.entry_number;
        }

        if (pokemons.entry_number <= 151 && pokemons.entry_number >= 100) {
            var img = pokemons.entry_number;
        }
        return (<><Pokemon key={pokemons.entry_number} pokemons={pokemons} imagen={img} ></Pokemon></>)
    })

    const handleChange = (e) =>{
        console.log(e.target.value)
        e.preventDefault()
     
        if(e.target.value){
        const pok = dataPokemon.filter((pokemons) => pokemons.pokemon_species.name.includes(e.target.value))
        setPokemon(pok)}
        else{
            setPokemon(estadoNombre)
        }
    }

    return (
        <div>
            <div className="container mt-5 white" align="center">
                <h1 >Pokedex</h1>
                <form>
                <div className="row col-sm-12">
                    <div className="col-sm-6"><input onChange={handleChange} type=" text" name="filter" id="filter"></input></div>
                    <div className="form-check form-switch col-sm-6">
                    <button className="form-check-label" type="submit" for="filter">Buscar</button>
                    </div>
                </div>
                </form>
            </div>
            <div className="row col-sm-12" >
                {
                    listPokemon
                }
            </div>
        </div>
    );
}