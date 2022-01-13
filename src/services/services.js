
export const getPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokedex/2/");
    const listpokemon = await response.json();
    return listpokemon.pokemon_entries;
}

export const getEspecies = async(id_pokemon) => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/"+id_pokemon);
    const descripcion = await response.json();
    return descripcion.flavor_text_entries[26];
}

export const getHabilidades = async(id_pokemon) => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+id_pokemon);
    const habilidades = await response.json();
    return habilidades.abilities;
}



