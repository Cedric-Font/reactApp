import { useState } from "react";
import PokemonCard from "./components/PokemonCard"
import Toto from "./components/test"
import Button from "./button"
function App(){
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];
  
  let tata = [
    {
      name : "toto",
      age: 45
    },{
      name: "jesus",
      age: 56
    }
  ]
  let tom = "coucou"
  let pokemon = pokemonList
  
  
  const [pokemonIndex, setpokemonIndex ] = useState(0)
  const handleNext = () =>{
    setpokemonIndex(pokemonIndex +1)
  }
  const handlePrecedent = () => {
    setpokemonIndex(pokemonIndex -1)
  }
  

  console.log(pokemonIndex)

  return(
    
<div>
  <PokemonCard pokemon = {pokemon[pokemonIndex]}/>
  <Button pokemonIndex = {pokemonIndex} nbrPokemon = {pokemonList.length} increment = {handleNext} decrement = {handlePrecedent}/>
   

  
  
  <Toto cedric = {tata} />
  <Toto jeremy = {tom}/>
  

  
  
</div>

)

}







export default App