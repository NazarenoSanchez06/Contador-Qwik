import  { $, component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/pokemon-image';


export default component$(() => {
  const pokeId= useSignal(1); // Primitivos, booleans, string
  // if (pokeId.value==0) {
  //   pokeId.value++
  // }
  const changuePokemonId=$((value:number)=>{
  if ((pokeId.value+value)<=0 )return ;
  pokeId.value+=value;
  
  })

  return (
    <>
      <span class="text-2xl">Buscador simple</span>
      <span class="text-9xl">{pokeId}</span>

      <PokemonImage id={pokeId.value}/>
      <div class="mt-1">
      <button onClick$={()=>changuePokemonId(-1)} class="bg-indigo-500 rounde p-3 hover:bg-indigo-800">Anterior</button>
      <button onClick$={()=>changuePokemonId(+1)} class="bg-indigo-500 rounde p-3 hover:bg-indigo-800 ml-3">Siguiente</button>
      </div>
      
    </>
  );
});

export const head: DocumentHead = {
  title: 'poke-qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
