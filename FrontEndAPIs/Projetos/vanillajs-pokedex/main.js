import { fetchPokemons } from './fetchApi.js'
import  { searchPokeEl } from './searchPokemon.js'
import { pokeModalElement } from "./pokeModalElement.js"
import { drawPokeElement } from "./drawPoke.js"

//await fetchPokemons(10)
sessionStorage.setItem('pokemonList', JSON.stringify([]))

searchPokeEl

//Start empty browser
//User searchs for a pokemon by name or ID
//Draws pokemon card in the browser
//Card has a button info that opens a modal to view more detailed info