import { component$ } from "@builder.io/qwik";

interface Props{
    id:number;

}

export const PokemonImage =component$(({id}:Props)=>{
    return (
        <img
        class="w-52" 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} 
        alt="pokemon sprit"/>
    )
});     